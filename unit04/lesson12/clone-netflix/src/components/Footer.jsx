import tradutor from '../assets/tradutor.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>Dúvidas? Ligue <a href="#" className='a'>0800 591 2876</a></p>
            <div id='linkRodape'>
                <div className='links'>
                    <a href="#" className='a'>Perguntas frequentes</a>
                    <a href="#" className='a'>Preferências de cookies</a>
                </div>
                <div className='links'>
                    <a href="#" className='a'>Central de Ajuda</a>
                    <a href="#" className='a'>Informações corporativas</a>
                </div>
                <div className='links'>
                    <a href="#" className='a'>Termos de Uso</a>
                </div>
                <div className='links'>
                    <a href="#" className='a'>Privacidade</a>
                </div>
            </div>
            <div id='select'>
                <img src={tradutor} alt="" id='imagem' />
                <select name="language" id="language">
                    <option value="Português">Português</option>
                    <option value="English">English</option>
                </select>
            </div>
        </footer>
    )
}

export default Footer