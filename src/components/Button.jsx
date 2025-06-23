import '../styles/Button.css'

function Button({ text, fn }) {
    return (
        <button className="btn" onClick={fn}>{text}</button>
    )
}

export default Button