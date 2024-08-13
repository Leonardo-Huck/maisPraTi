import logo from '../assets/Netflix-Logo-500x281.png'
import { FaSistrix } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import avatar from "../assets/img-perfil-3.png"
import './HeaderInicial.css'


const HeaderInicial = () => {
    return (
        <div className='Header' id='Header'>
            <div className='Header'>
                <img src={logo} id='logo' />
            </div>
            <div id='nav'>
                <a href="#">Início</a>
                <a href="#">Séries</a>
                <a href="#">Filmes</a>
                <a href="#">Bombando</a>
                <a href="#">Minha lista</a>
                <a href="#">Navegar por idiomas</a>
            </div>
            <div id='div-busca'>
                <FaSistrix className='icon-lupa' />
                <a href="#">Infantil</a>
                <FaRegBell className='icon-sino' />
                <img src={avatar} id='avatar' />
            </div>
        </div>
    )
}

var nav = document.getElementById('Header');
window.addEventListener("scroll", function (event) {
    if (window.scrollY > 100) {

        nav.style.background = rgb(20, 20, 20);

    }
    else {
        nav.style.background = "transparent";
    }
});

export default HeaderInicial