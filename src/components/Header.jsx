import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import LinkButton from './LinkButton'
import HamburgerMenu from './HamburgerMenu'
import Button from './Button'
import '../styles/Header.css'

function Header() {

    const [showBg, setShowBg] = useState(false)

    function onScroll() {
        if (window.scrollY > 100) {
            setShowBg(true)
        } else if (window.scrollY < 100 && !isHamMenuOpened) {
            setShowBg(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    })

    const [isHamMenuOpened, setIsHamMenuOpened] = useState(false)

    function toggleHamMenu() {
      isHamMenuOpened ? setIsHamMenuOpened(false) : setIsHamMenuOpened(true)
      if (!showBg) {
        setShowBg(true)
      } else if (showBg && window.scrollY < 100) {
        setShowBg(false)
      }
    }

    useEffect(() => {
        if (!isHamMenuOpened) return
    
        const onDocMouseDown = (e) => {
            if (e.target.closest(".hamburger-react")) return
            setIsHamMenuOpened(false)
            setShowBg(false)
        };
    
        document.addEventListener("mousedown", onDocMouseDown);
        return () => {
          document.removeEventListener("mousedown", onDocMouseDown);
        };
      }, [isHamMenuOpened]);

    return (
        <header className={showBg ? "with_bg" : ""}>
            <div className="container header">
                <a href="#" className="logo">
                    <img src={logo} alt="SleepApp - Home" />
                </a>
                <div className="right_half">
                    <div className="link_btns">
                        <LinkButton text={'Features'} />
                        <LinkButton text={'Price'} />
                        <LinkButton text={'Contacts'} />
                    </div>
                    <Button text={'Try for free'} altColor={true} />
                    <div className="ham_btn">
                        <Hamburger toggled={isHamMenuOpened} size={36} onToggle={() => toggleHamMenu()} />
                    </div>
                </div>
                <HamburgerMenu isOpened={isHamMenuOpened} />
            </div>
        </header>
    )
}

export default Header