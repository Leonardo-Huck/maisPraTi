/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
 repetição. Escrever cada um deles no formato HH.MM.SS.
 */

console.log('\n------------ HORÁRIO ------------\n');
const prompt = require('prompt-sync')();

let horarios = [];

console.log('Informe 5 horários: ');
for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}º Horário`);
    while (true) {
        let hora = parseInt(prompt('Informe a hora (0 - 23): '));
        let minuto = parseInt(prompt('Informe o minuto (0 - 59): '));
        let segundo = parseInt(prompt('Informe o segundo (0 - 59): '));

        if (hora >= 0 && hora < 24) {
            if (minuto >= 0 && minuto < 60) {
                if (segundo >= 0 && segundo < 60) {
                    horarios.push(new Date().setHours(hora, minuto, segundo));
                    break;
                } else {
                    console.log('Segundo inválido!');
                }
            } else {
                console.log('Minuto inválido!');
            }
        } else {
            console.log('Hora inválida!');
        }
    }
}

console.log('\nHorários no formato HH.MM.SS: ');
for (horario of horarios) {
    let hora = new Date(horario);
    let hour = hora.getHours().toString().padStart(2, '0');
    let minuto = hora.getMinutes().toString().padStart(2, '0');
    let segundo = hora.getSeconds().toString().padStart(2, '0');

    console.log(`${hour}.${minuto}.${segundo}`);
}
