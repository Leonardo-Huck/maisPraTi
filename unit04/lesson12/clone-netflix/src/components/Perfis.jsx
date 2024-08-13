import Imgperfil1 from '../assets/img-perfil-1.png'
import Imgperfil2 from '../assets/img-perfil-2.png'
import Imgperfil3 from '../assets/img-perfil-3.png'
import Imgperfil4 from '../assets/img-perfil-4.png'
import Imgperfil5 from '../assets/img-perfil-5.png'
import './Perfis.css'

document.body.style = 'background: #141414;';

const Perfis = () => {
    return (
        <div id='perfis'>
            <h1>Quem está assistindo?</h1>
            <div id='cards'>
                <div className='cards'>
                    <img src={Imgperfil3} className='cardsImg' />
                    <p>CAPIVARA</p>
                </div>
                <div className='cards'>
                    <img src={Imgperfil5} className='cardsImg' />
                    <p>TATIANA</p>
                </div>
                <div className='cards'>
                    <img src={Imgperfil1} className='cardsImg' />
                    <p>DEBORA</p>
                </div>
                <div className='cards'>
                    <img src={Imgperfil2} className='cardsImg' />
                    <p>OCTAVIO</p>
                </div>
                <div className='cards'>
                    <img src={Imgperfil4} className='cardsImg' />
                    <p>SAMUEL</p>
                </div>
            </div>
            <button type='button' id='gerenciarPerfis'>Gerenciar perfis</button>
        </div>
    )
}

export default Perfis