import banner from '../../assets/cover.png'
import './index.scss'

export default function Banner() {
    return (
        <header className="banner">
            <img src={banner} alt="Banner" />
        </header>
    )
}