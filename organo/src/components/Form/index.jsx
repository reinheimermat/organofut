import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import InputText from "../InputText";
import "./index.scss"

export default function Form(props) {

    const [name, setName] = useState('')
    const [attack, setAttack] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    const [def, setDef] = useState('')

    const onSave = (e) => {
        e.preventDefault()
        props.onRegisteredPlayer({
            name,
            attack,
            image,
            time,
            def
        })
        setName('')
        setAttack('')
        setImage('')
        setTime('')
        setDef('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar a sua carta de jogador!</h2>
                <InputText
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome:"
                    value={name}
                    type="text"
                    onChanged={value => setName(value)}
                />
                <InputText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem:"
                    value={image}
                    type="text"
                    onChanged={value => setImage(value)}
                />
                <InputText
                    required={true}
                    label="Ataque"
                    placeholder="Digite o seu nível no ataque:"
                    value={attack}
                    type="number"
                    onChanged={value => setAttack(value)}
                />
                <InputText
                    required={true}
                    label="Defesa"
                    placeholder="Digite o seu nível na defesa:"
                    value={def}
                    type="number"
                    onChanged={value => setDef(value)}
                />
                <DropDown
                    required={true}
                    label="Posição"
                    itens={props.times}
                    value={time}
                    onChanged={value => setTime(value)}
                />
                <Button>
                    Criar Carta
                </Button>
            </form>
        </section>
    )
}