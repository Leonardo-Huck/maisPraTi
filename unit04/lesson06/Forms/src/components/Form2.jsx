import { useState } from "react";

function Form2() {
    const [adress, setAdress] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setAdress(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!adress.street || !adress.city || !adress.postalCode) {
            alert('Por favor, preencha todos os campos antes de submeter')
        } else {
            alert(`Endereço submetido: \nRua: ${adress.street}\nCidade: ${adress.city}\nCEP: ${adress.postalCode}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="street" onChange={handleChange} />
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name="city" onChange={handleChange} />
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name="postalCode" onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submeter</button>
        </form>
    )
}

export default Form2