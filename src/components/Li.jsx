import '../styles/Li.css'
import yesIcon from '../assets/icons/yes.svg'
import noIcon from '../assets/icons/no.svg'

function Li({positive, descr}) {

    return(
        <li className={positive ? "li positive" : "li"}><img src={positive ? yesIcon : noIcon} alt="" /><p className="p">{descr}</p></li>
    )
}

export default Li