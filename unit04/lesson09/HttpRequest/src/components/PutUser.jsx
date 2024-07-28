import { useState } from "react"
import axios from 'axios'

function PutUser() {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    const HandleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()

        if (!user.name || !user.email) {
            alert('Por favor, preencha todos os campos antes de submeter')
        } else {
            axios.put('https://reqres.in/api/users/2', user)
                .then(response => {
                    console.log('Dados do usuário atualizados: ', response.data)
                    alert(`Usuário atualizado:\n ${JSON.stringify(response.data)}`)
                })
                .catch(error => {
                    console.log('Erro ao atualizar o usuário:', error)
                    alert('Erro ao atualizar os dados do usuário')
                })
        }

    }

    return (
        <div id="form">
            <h1>Alteração de Usuário</h1>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="name" value={user.name} onChange={HandleChange} />
                </div>
                <br />
                <div>
                    <label>E-Mail:</label>
                    <input type="email" name="email" value={user.email} onChange={HandleChange} />
                </div>
                <br />
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default PutUser