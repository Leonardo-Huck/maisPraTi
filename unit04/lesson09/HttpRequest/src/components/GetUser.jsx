import axios from "axios"

function GetUser() {

    const sendRequest = () => {
        axios.get('https://reqres.in/api/users/2')
            .then(response => {
                console.log('Dados do usuário: ', response.data)
                alert(`Usuário recuperado: \nNome: ${JSON.stringify(response.data)}`)
            })
            .catch(error => {
                console.log('Erro ao recuperar o usuário:', error)
                alert('Erro ao recuperar os dados do usuário')
            })
    }
    return (
        <div id="getUser">
            <button onClick={sendRequest}>Recuperar Dados</button>
        </div>
    )
}

export default GetUser