import '../styles/LinkButton.css'

function LinkButton({text, fn = () => {return}, icon = false, to}) {

    function handleClick(e) {
        e.preventDefault()
        fn()
    }

    if (!icon) {
        return(
            <a href={to ? to : "#"} className="link_btn" onClick={e => handleClick(e)}>{text}</a>
        )
    } else if (!text) {
        return (
            <a href={to ? to : "#"} className="link_btn" onClick={e => handleClick(e)}>
                <img src={icon} className="link_icon" />
            </a>
        )
    } else {
        return(
            <a href={to ? to : "#"} className="link" onClick={e => handleClick(e)}>
                <img src={icon} className="link_icon" />
                <p className="p link_descr">{text}</p>
            </a>
        )
    }
}

export default LinkButton