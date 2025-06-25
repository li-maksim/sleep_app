import logo from '../assets/logo.png'
import LinkButton from './LinkButton'
import Button from './Button'
import '../styles/Header.css'

function Header() {

    return (
        <header>
            <div className="container header">
                <a href="#" className="logo">
                    <img src={logo} alt="SleepApp - Home" />
                </a>
                <div className="link_btns">
                    <LinkButton text={'Features'} />
                    <LinkButton text={'Price'} />
                    <LinkButton text={'Contacts'} />
                </div>
                <Button text={'Try for free'} altColor={true} />
            </div>
        </header>
    )
}

export default Header