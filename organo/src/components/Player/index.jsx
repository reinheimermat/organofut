import './index.scss'

export default function Player({ name, image, attack, def, backColor }) {
    return (
        <div className="player">
            <div className="header" style={{ backgroundColor: backColor }}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <div className='ger'>
                    <h5>Ataque: {attack}</h5>
                    <h5>Defesa: {def}</h5>
                </div>
            </div>
        </div>
    )
}