import { useState } from "react";
import styled from 'styled-components'
import axios from 'axios'

const SearchIPAddress = () => {
    const [ip, setIP] = useState('0.0.0.0')
    const [returnedIP, setReturnedIP] = useState([])
    const searchIP = async () => {
        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`)
            console.log(response)
            setReturnedIP(response.data)
            console.log(returnedIP)
        } catch (error) {
            console.error('Erro:', error)
        }
    }

    return (
        <>
            <div>
                <label>Procurar IP</label>
                <input type="text" value={ip} onChange={(e) => setIP(e.target.value)} />
                <button type="button" onClick={searchIP}>Procurar</button>
            </div>
            <div>
                <h1>IP: {returnedIP.ip}</h1>
                <h2>HOSTNAME: {returnedIP.hostname}</h2>
                <h3>DATA: {returnedIP.city}, {returnedIP.country}, {returnedIP.loc}, {returnedIP.postal}</h3>
                <h3>REGION: {returnedIP.region}</h3>
                <h3>TIMEZONE: {returnedIP.timezone}</h3>
            </div>
        </>
    )
}

export default SearchIPAddress

