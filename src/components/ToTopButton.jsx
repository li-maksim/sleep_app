import '../styles/ToTopButton.css'
import arrow from '../assets/icons/arrow.svg'
import { useState } from 'react'
import { useEffect } from 'react'

function ToTopButton() {

    const [showBtn, setShowBtn] = useState(false)
    function onScroll() {
        window.scrollY > 1400 ? setShowBtn(true) : setShowBtn(false)
    }
    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    })

    return (
        <button className={showBtn ? "to_top_btn" : "to_top_btn hidden"} onClick={() => scrollToTop()}>
            <img src={arrow} alt="" className="icon" />
        </button>
    )
}

export default ToTopButton