import { useState } from "react"
import axios from 'axios'

function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const HandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()

        if (!form.name || !form.email || !form.password) {
            alert('Por favor, preencha todos os campos antes de submeter')
        } else {
            try {
                const response = await axios.post('https://reqres.in/api/users', form)

                console.log(response)

                alert(`Usuário criado com sucesso! \nID ${response.data.id}\nNome: ${response.data.name}\nE-Mail: ${response.data.email}`)
            } catch (error) {
                console.error(error)
                alert('Erro ao criar o usuário')
            }
        }

    }

    return (
        <div id="form">
            <h1>Cadastro de Usuário</h1>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="name" value={form.name} onChange={HandleChange} />
                </div>
                <br />
                <div>
                    <label>E-Mail:</label>
                    <input type="email" name="email" value={form.email} onChange={HandleChange} />
                </div>
                <br />
                <div>
                    <label>Senha:</label>
                    <input type="password" name="password" value={form.password} onChange={HandleChange} />
                </div>
                <br />
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default Form