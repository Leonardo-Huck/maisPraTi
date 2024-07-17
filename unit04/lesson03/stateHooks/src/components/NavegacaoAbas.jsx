import { useState } from "react"
import img from "./img/react.png"

const btntab1 = document.getElementById('btn-tab1')
const btntab2 = document.getElementById('btn-tab2')
const btntab3 = document.getElementById('btn-tab3')
const btntab4 = document.getElementById('btn-tab4')


function NavegacaoAbas() {
    const listainicial = [
        [".", "..", "...", "...."],
        [";", ";;", ";;;", ";;;;"],
        [",", ",,", ",,,", ",,,,"],
        ["~", "~~", "~~~", "~~~~"],
    ]
    const [lista, setLista] = useState(listainicial[0]);

    const limpaBotao = (btn) => {
        btntab1.className = ""
        btntab2.className = ""
        btntab3.className = ""
        btntab4.className = ""
        btn.className = "active"
    }

    return (
        <>
            <div id="main">
                <div id="header">
                    <img src={img} alt="" />
                    <div>
                        <h1>React.js</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <div id="tabs">
                        <button id="btn-tab1" class="active" onClick={() => { setLista(listainicial[0]); limpaBotao(btntab1); }}>Teste1</button>
                        <button id="btn-tab2" onClick={() => { setLista(listainicial[1]); limpaBotao(btntab2); }}>Teste2</button>
                        <button id="btn-tab3" onClick={() => { setLista(listainicial[2]); limpaBotao(btntab3); }}>Teste3</button>
                        <button id="btn-tab4" onClick={() => { setLista(listainicial[3]); limpaBotao(btntab4); }}>Teste4</button>
                    </div>
                    <ul>
                        {lista.map((lista, index) => (
                            <li key={index}>{lista}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default NavegacaoAbas