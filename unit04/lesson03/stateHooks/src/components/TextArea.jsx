import { useState } from "react"

function TextArea() {
    const [caracter, setCaracter] = useState('');

    return (
        <>
            < div >
                <textarea name="text" id="text" onChange={() => setCaracter(document.getElementById('text').value)}></textarea>
            </div >
            <div>
                <p>{caracter}</p>
            </div>
        </>
    )
}

export default TextArea