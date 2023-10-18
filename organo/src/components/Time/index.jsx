import Player from '../Player'
import './index.scss'

export default function Time(props) {
    const primaryColor = { borderColor: props.primaryColor }
    const secondaryColor = { backgroundColor: props.secondaryColor }

    return (
        (props.players.length > 0) ? <section className='time' style={secondaryColor}>
            <h3 style={primaryColor}>{props.name}</h3>
            <div className='players'>
                {props.players.map(player => <Player backColor={props.primaryColor} key={player.name} name={player.name} attack={player.attack} def={player.def} image={player.image} />)}
            </div>
        </section>
            : ''
    )
}