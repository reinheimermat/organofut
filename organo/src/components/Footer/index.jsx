import ig from '../../assets/ig.png'
import fb from '../../assets/fb.png'
import tw from '../../assets/tw.png'
import logo from '../../assets/logo.png'

import './index.scss'

export default function Footer() {
    return (
        <footer>
            <section className='social-links'>
                <a href="#"><img src={fb} alt="Facebook" /></a>
                <a href="#"><img src={tw} alt="Twitter" /></a>
                <a href="#"><img src={ig} alt="Instagram" /></a>
            </section>
            <section className='logo'>
                <img src={logo} alt="logo organo" />
            </section>
            <section className='text'>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}