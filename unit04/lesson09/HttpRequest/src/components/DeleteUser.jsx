import axios from "axios"
import { useState } from "react"

function DeleteUser() {
    const [id, setID] = useState(0)

    const sendRequest = () => {
        axios.delete('https://reqres.in/api/users/' + id)
            .then(response => {
                console.log('Usuário deletado!, Status: ', response.status)
                alert(`Usuário deletado com sucesso!, Status: ` + response.status)
            })
            .catch(error => {
                console.log('Erro ao deletar o usuário:', error)
                alert('Erro ao deletar o usuário')
            })
    }

    const HandleChange = (e) => {
        setID(e.target.value)
    }
    return (
        <div id="getUser">
            <div>
                <label>ID</label>
                <input type="text" name="id" value={id} onChange={HandleChange} />
            </div>
            <button onClick={sendRequest} id="deleteUser">Deletar Usuário</button>
        </div>
    )
}

export default DeleteUser