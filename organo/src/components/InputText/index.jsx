import './index.scss'

export default function InputText(props) {

    const onDigit = (e) => {
        props.onChanged(e.target.value)
    }

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigit} required={props.required} type={props.type} placeholder={props.placeholder} />
        </div>
    )
}