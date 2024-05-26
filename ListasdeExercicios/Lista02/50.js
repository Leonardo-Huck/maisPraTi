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
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
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
        QuartosDisponiveis: quartosDisponiveis
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
    return reserva;
}

function Id() {
    let id = crypto.randomBytes(2).toString("hex");
    return id;
}

function AdicionarHotel() {
    console.clear();
    console.log('\n------------- ADICIONANDO UM HOTEL ------------- \n');

    let nome = prompt('Informe o nome do Hotel: ');
    let cidade = prompt('Informe a cidade do Hotel: ');
    let quartosTotais = 0;
    while (quartosTotais <= 0)
        quartosTotais = parseInt(prompt('Informe a quantidade total de quartos: '));
    let quartosDisponiveis = -1;
    let quartosVagos;
    while (quartosDisponiveis < 0) {
        quartosVagos = parseInt(prompt('Informe a quantidade de quartos disponíveis: '));
        if (quartosVagos >= 0 || quartosVagos <= quartosTotais) quartosDisponiveis = quartosVagos;
    }
    HOTEIS.push(CriaHotel(nome, cidade, quartosTotais, quartosVagos));
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

    readline.question('\npress any key!');

    Menu();
}

function ExibirHotel(hotel) {
    console.log(`\nId: ${hotel.ID}`);
    console.log(`Nome: ${hotel.Nome}`);
    console.log(`Cidade: ${hotel.Cidade}`);
    console.log(`Quartos Totais: ${hotel.QuartosTotais}`);
    console.log(`Quartos Disponiveis: ${hotel.QuartosDisponiveis}`);
}