let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resposta = {}

        if (false) {
            resposta = {
                codigo: 404,
                erro: 'Objeto não encontrado'
            }

            reject(resposta)
        }

        resposta = {
            1: { id: 1, nome: 'Caio' },
            2: { id: 1, nome: 'Leonan' },
            3: { id: 1, nome: 'Rogério' }
        }

        resolve(resposta)
    }, 4000)

}).then(() => {
    let promessa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let resposta = {}

            if (false) {
                resposta = {
                    codigo: 1000,
                    erro: 'Assistir One Piece'
                }

                reject(resposta)
            }

            resposta = {
                1: { id: 1, nome: 'Pedro' },
                2: { id: 1, nome: 'Gabriel' },
                3: { id: 1, nome: 'Guilherme' }
            }

            resolve(resposta)
        }, 4000)
    }).then((dados) => {

    }).catch(erro => {
        console.log(erro)
    })
}).then(() => {
    console.log("then 2")
    return 'then 3'
}).then(param => {
    console.log(param)
}).catch((erro) => {
    console.log("Parametro de erro enviado na promisse reject")
})
console.log(promessa)