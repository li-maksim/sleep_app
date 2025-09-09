import { useState } from 'react'
import { useEffect } from 'react'
import logo from '../assets/logo.png'
import LinkButton from './LinkButton'
import Button from './Button'
import '../styles/Header.css'

function Header() {

    const [showBg, setShowBg] = useState(false)

    function onScroll() {
        window.scrollY > 100 ? setShowBg(true) : setShowBg(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    })

    return (
        <header className={showBg ? "with_bg" : ""}>
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