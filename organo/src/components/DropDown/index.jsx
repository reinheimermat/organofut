import './index.scss'

export default function DropDown(props) {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={e => props.onChanged(e.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}