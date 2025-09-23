import '../styles/Button.css'

function Button({ text, fn, altColor = false }) {
    return (
        <button className={altColor ? "btn" : "btn btn_alt_color"} onClick={() => fn()} >{text}</button>
    )
}

export default Button