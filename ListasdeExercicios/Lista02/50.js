/*
1.EstruturadeDados:
 ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
 cidade, quartos totais e quartos disponiveis.
 ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
 nomeCliente.

 2. Funcionalidades:
 ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
 ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
 disponíveis em uma cidade específica.
 ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
 deve diminuir o número de quartos disponiveis do hotel.
 ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
 aumentar o número de quartos disponiveis no hotel correspondente.
 ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
 cliente.

 3. Regras de Negócio:
 ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
 ○ As reservas devem ser identificadas por um ID único e associadas a um
 único hotel.

 4. Desafios Adicionais (Opcionais):
 ○ Implementar uma função de check-in e check-out que atualize a
 disponibilidade de quartos.
 ○ Gerar relatórios de ocupação para um hotel.
 ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
 avaliações dentro do objeto do hotel.
 */

const prompt = require('prompt-sync')();
const readline = require('readline-sync');
const crypto = require("crypto");

const HOTEIS = [];
const RESERVAS = [];
const CHECKIN = [];

// Inicia o programa
Menu();

function Menu() {
    console.clear();
    console.log('\n------------- SISTEMA DE RESERVAS ------------- \n');
    console.log('1 - Adicionar Hotel');
    console.log('2 - Buscar Hotel');
    console.log('3 - Fazer Reserva');
    console.log('4 - Cancelar Reserva');
    console.log('5 - Listar Reservas');
    console.log('6 - Fazer Check-in');
    console.log('7 - Fazer Check-out')
    console.log('8 - Relatório de ocupação')
    console.log('0 - Sair\n')

    let flag = -1;
    while (flag === -1) {
        escolha = parseInt(prompt('Informe uma opção: '));
        if (escolha < 0 && escolha > 8) console.log('Por favor informe uma opção válida!');
        else flag = escolha;
    }

    switch (flag) {
        case 1:
            AdicionarHotel();
            break;
        case 2:
            BuscarHotel();
            break;
        case 3:
            FazerReserva();
            break;
        case 4:
            CancelarReserva();
            break;
        case 5:
            ListarReservas();
            break;
        case 6:
            CheckIn();
            break;
        case 7:
            CheckOut();
            break;
        case 8:
            RelatorioOcupacao();
            break;
        case 0:
            process.exit();
            break;
    }
}

function CriaHotel(nome, cidade, quartosTotais, quartosDisponiveis) {
    let ID = Id();
    let hotel = {
        ID: ID,
        Nome: nome,
        Cidade: cidade,
        QuartosTotais: quartosTotais,
        QuartosDisponiveis: quartosDisponiveis,
        QuartosOcupados: (quartosTotais - quartosDisponiveis),
        Avaliacoes: []
    }
    return hotel;
}

function CriaReserva(idHotel, nomeCliente) {
    let ID = Id();
    let reserva = {
        IDReserva: ID,
        IDHotel: idHotel,
        nomeCliente: nomeCliente
    }
    DiminiuQuartos(idHotel);
    return reserva;
}

function Id() {
    let id = crypto.randomBytes(2).toString("hex");
    return id;
}

function AdicionarHotel() {
    console.clear();
    console.log('\n------------- ADICIONANDO UM HOTEL ------------- \n');
    let flag = '';
    do {
        let nome = prompt('Informe o nome do Hotel: ');
        let cidade = prompt('Informe a cidade do Hotel: ');
        let quartosTotais = 0;
        while (quartosTotais <= 0)
            quartosTotais = parseInt(prompt('Informe a quantidade total de quartos: '));
        let quartosDisponiveis = -1;
        let quartosVagos;
        while (quartosDisponiveis < 0) {
            quartosVagos = parseInt(prompt('Informe a quantidade de quartos disponíveis: '));
            if (quartosVagos >= 0 && quartosVagos <= quartosTotais) quartosDisponiveis = quartosVagos;
        }
        HOTEIS.push(CriaHotel(nome, cidade, quartosTotais, quartosVagos));
        console.log('');

        flag = prompt('Deseja cadastrar mais hoteis (S)im (N)ão ? ')
        console.log('');
    } while (flag !== 'n' && flag !== 'N')
    Menu();
}

function BuscarHotel() {
    console.clear();
    console.log('\n------------- BUSCANDO UM HOTEL ------------- \n');

    let Cidade = prompt('Qual cidade deseja? ');

    let encontrouHotel = false;

    HOTEIS.forEach(function (hotel) {
        if (hotel.Cidade === Cidade) {
            ExibirHotel(hotel);
            encontrouHotel = true;
        }
    });

    if (!encontrouHotel) {
        console.log('Não existem hotéis nesta cidade!');
    }

    readline.question('\nPressione uma tecla!');

    Menu();
}

function ExibirHotel(hotel) {
    console.log(`\nId: ${hotel.ID}`);
    console.log(`Nome: ${hotel.Nome}`);
    console.log(`Cidade: ${hotel.Cidade}`);
    console.log(`Quartos Totais: ${hotel.QuartosTotais}`);
    console.log(`Quartos Disponiveis: ${hotel.QuartosDisponiveis}`);
    console.log(`Quartos Ocupados: ${hotel.QuartosOcupados}`);
    console.log('Avaliações:')
    for (avaliacao of hotel.Avaliacoes) {
        console.log(`Nota: ${avaliacao[0]}, Comentário: ${avaliacao[1]}`);
    }
}

function FazerReserva() {
    console.clear();
    console.log('\n------------- FAZENDO UMA RESERVA ------------- \n');
    if (HOTEIS.length > 0) {
        ListaRapidaHoteis();

        console.log('');
        let idHotel = prompt('Informe o Id do hotel que deseja realizar a reserva: ');
        let nomeCliente = prompt('Informe o nome do cliente: ');

        if (VerificaHotel(idHotel)) {
            RESERVAS.push(CriaReserva(idHotel, nomeCliente));
            console.log('Reserva criada com sucesso!');
        } else {
            console.log('\nHotel inexistente ou não tem quartos disponíveis!');
        }
    } else {
        console.log('Não existem hotéis cadastrados!')
    }
    readline.question('\nPressione uma tecla!');
    Menu();
}

function CancelarReserva() {
    console.clear();
    console.log('\n------------- CANCELANDO UMA RESERVA ------------- \n');
    if (RESERVAS.length > 0) {
        ListaRapidaReservas();

        console.log('');
        let idReserva = prompt('Informe a Id da reserva que deseja cancelar: ');

        let verifica = VerificaReserva(idReserva);

        if (verifica) {
            RemoveReserva(idReserva);
            console.log('Reserva removida e quantidade de quartos do hotel atualizada!');
        } else {
            console.log('\nReserva inexistente!');
        }

    } else {
        console.log('Não existem reservas cadastradas!');
    }

    readline.question('\nPressione uma tecla!');
    Menu();
}

function ListarReservas() {
    console.clear();
    console.log('\n------------- LISTANDO RESERVAS ------------- \n');

    console.log('Lista das Reservas: ')
    RESERVAS.forEach(function (reserva) {
        console.log('Reserva: ')
        console.log(`ID: ${reserva.IDReserva}, Hotel: ${reserva.IDHotel}, Nome Cliente: ${reserva.nomeCliente}`);
        console.log('Dados do Hotel:');
        ExibeHotel(reserva.IDHotel);
        console.log('');
    });

    readline.question('\nPressione uma tecla!');
    Menu();
}

function CheckIn() {
    console.clear();
    console.log('\n------------- REALIZANDO CHECK-IN ------------- \n');
    if (RESERVAS.length > 0) {
        ListaRapidaReservas();

        console.log('');
        let idReserva = prompt('Informe a Id da reserva que deseja realizar o check-in: ');
        let verifica = VerificaReserva(idReserva);

        if (verifica) {
            for (reserva of RESERVAS) {
                if (reserva.IDReserva === idReserva) {
                    CHECKIN.push(reserva);
                    AumentaQuartosOcupados(reserva.IDHotel);
                    let indexToRemove = RESERVAS.indexOf(reserva);
                    if (indexToRemove !== -1) {
                        RESERVAS.splice(indexToRemove, 1)
                    }
                    console.log('Check-In realizado com sucesso! Número de quartos atualizado!');
                    break;
                }
            }
        } else {
            console.log('\nReserva inexistente!');
        }

    } else {
        console.log('Não existem reservas cadastradas!');
    }

    readline.question('\nPressione uma tecla!');
    Menu();

}

function CheckOut() {
    console.clear();
    console.log('\n------------- REALIZANDO CHECK-OUT ------------- \n');
    if (CHECKIN.length > 0) {
        ListaRapidaCheckIn();

        console.log('');
        let idReserva = prompt('Informe a Id da reserva que deseja realizar o check-out: ');
        let verifica = VerificaReservaCheckIn(idReserva);

        if (verifica) {
            let hotelID = 0;
            for (reserva of CHECKIN) {
                if (reserva.IDReserva === idReserva) {
                    hotelID = reserva.IDHotel;
                    DiminuirQuartosOcupados(reserva.IDHotel);
                    let indexToRemove = CHECKIN.indexOf(reserva);
                    if (indexToRemove !== -1) {
                        CHECKIN.splice(indexToRemove, 1)
                    }
                }
                console.log('Check-Out realizado com sucesso! Número de quartos atualizado!\n');
                let flag = '';
                while (true) {
                    flag = prompt('Deseja deixar uma avaliação para o hotel (S)im (N)ão ? ');
                    if (flag === 'S' || flag === 's') {
                        let nota = parseInt(prompt('Informe uma nota de 0 a 10: '));
                        let comentario = prompt('Comentário: ');
                        DeixaAvaliacao(hotelID, nota, comentario);
                        break;
                    } else if (flag === 'N' || flag === 'n')
                        break;
                }
            }
        } else {
            console.log('\nReserva inexistente!');
        }

    } else {
        console.log('Não existem reservas cadastradas!');
    }

    readline.question('\nPressione uma tecla!');
    Menu();

}

function RelatorioOcupacao() {
    console.clear();
    console.log('\n------------- RELATÓRIO DE OCUPAÇÃO ------------- \n');

    if (HOTEIS.length > 0) {
        console.log('Ocupação dos Hotéis: ')
        HOTEIS.forEach(function (hotel) {
            console.log(`ID: ${hotel.ID}, Nome: ${hotel.Nome}, Cidade: ${hotel.Cidade},
        Quartos Totais: ${hotel.QuartosTotais}, Quartos Disponíveis: ${hotel.QuartosDisponiveis}, Quartos Ocupados: ${hotel.QuartosOcupados}\n`);
        });
    } else {
        console.log('Ainda não existem hoteis cadastrados!')
    }

    readline.question('\nPressione uma tecla!');
    Menu();
}

function VerificaHotel(id) {
    for (hotel of HOTEIS) {
        if (hotel.ID === id) {
            if (hotel.QuartosDisponiveis > 0) {
                return true;
            }
        }
    }
}

function VerificaReserva(id) {
    for (reserva of RESERVAS) {
        if (reserva.IDReserva === id) {
            return true;
        }
    }
}

function VerificaReservaCheckIn(id) {
    for (reserva of CHECKIN) {
        if (reserva.IDReserva === id) {
            return true;
        }
    }
}

function DiminiuQuartos(id) {
    for (hotel of HOTEIS) {
        if (hotel.ID === id) {
            hotel.QuartosDisponiveis--;
        }
    }
}

function AumentaQuartos(id) {
    for (hotel of HOTEIS) {
        if (hotel.ID === id) {
            hotel.QuartosDisponiveis++;
        }
    }
}

function AumentaQuartosOcupados(id) {
    for (hotel of HOTEIS) {
        if (hotel.ID === id) {
            hotel.QuartosOcupados++;
        }
    }
}

function DiminuirQuartosOcupados(id) {
    for (hotel of HOTEIS) {
        if (hotel.ID === id) {
            hotel.QuartosDisponiveis++;
            hotel.QuartosOcupados--;
        }
    }
}

function ListaRapidaHoteis() {
    console.log('Lista dos Hotéis: ')
    HOTEIS.forEach(function (hotel) {
        console.log(`ID: ${hotel.ID}, Nome: ${hotel.Nome}, Cidade: ${hotel.Cidade}, Quartos Disponíveis: ${hotel.QuartosDisponiveis}`);
    });
}

function ExibeHotel(id) {
    for (hotel of HOTEIS) {
        if (hotel.ID === id)
            console.log(`ID: ${hotel.ID}, Nome: ${hotel.Nome}, Cidade: ${hotel.Cidade}, Quartos Totais: ${hotel.QuartosTotais}, Quartos Disponíveis: ${hotel.QuartosDisponiveis}, Quartos Ocupados: ${hotel.QuartosOcupados}`);
    };
}

function ListaRapidaReservas() {
    console.log('Lista das Reservas: ')
    RESERVAS.forEach(function (reserva) {
        console.log(`ID: ${reserva.IDReserva}, Hotel: ${reserva.IDHotel}, Nome Cliente: ${reserva.nomeCliente}`);
    });
}

function ListaRapidaCheckIn() {
    console.log('Lista das Reservas: ')
    CHECKIN.forEach(function (reserva) {
        console.log(`ID: ${reserva.IDReserva}, Hotel: ${reserva.IDHotel}, Nome Cliente: ${reserva.nomeCliente}`);
    });
}

function RemoveReserva(id) {
    for (reserva of RESERVAS) {
        if (reserva.IDReserva === id) {
            AumentaQuartos(reserva.IDHotel);
            let indexToRemove = RESERVAS.indexOf(reserva);
            if (indexToRemove !== -1) {
                RESERVAS.splice(indexToRemove, 1)
            }
            break;
        }
    }
}

function DeixaAvaliacao(id, nota, comentario) {
    let avaliacao = [nota, comentario];
    for (hotel of HOTEIS) {
        if (hotel.ID === id) {
            if (!hotel.Avaliacoes) {
                hotel.Avaliacoes = [];
            }
            hotel.Avaliacoes.push(avaliacao);
            break;
        }
    }
}