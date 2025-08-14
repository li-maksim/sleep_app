import '../styles/Input.css'

function Input({type, name, val, fn}) {

    if (type === 'checkbox') {
        return (
            <label className="checkbox_wrapper" htmlFor="sub_checkbox">
                <input type={type} value={val} onChange={(e) => fn(e)} className="checkbox" id="sub_checkbox" />
                <span className="checkmark"></span>
                <p>{name}</p>
            </label>
        )
    } else {
        return (
            <input type={type} placeholder={name} value={val} onChange={(e) => fn(e)} className="input" />
        )
    }
}

export default Input