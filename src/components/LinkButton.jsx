import '../styles/LinkButton.css'

function LinkButton({text, fn}) {

    function handleClick(e) {
        e.preventDefault()
        fn()
    }

    return(
        <a href="#" className="link_btn" onClick={e => handleClick(e)}>{text}</a>
    )
}

export default LinkButton