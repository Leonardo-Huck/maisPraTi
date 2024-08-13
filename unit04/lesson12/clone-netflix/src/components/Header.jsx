import netflixlogo from '../assets/Netflix-Logo-500x281.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="div-logo">
                <img src={netflixlogo} alt="logo da NetFlix" className='logo' />
            </div>
        </>
    )
}

export default Header