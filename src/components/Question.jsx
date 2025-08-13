import '../styles/Question.css'
import arrow from '../assets/icons/arrow.svg'
import { useState } from 'react'

function Question({q, a}) {

    const [expanded, setExpanded] = useState('')
    function handleClick() {
        if (expanded === '') {
            setExpanded(' expanded')
        } else {
            setExpanded('')
        }
    }

    return (
        <div className={"question" + expanded}>
            <div className="top" onClick={() => handleClick()}>
                <div className="top_text">
                    {q}
                </div>
                <img src={arrow} alt="Open and close question icon" className="icon arrow_icon" />
            </div>
            <div className="bottom">
                <div className="bottom_text">
                    {a}
                </div>
            </div>
        </div>
    )
}

export default Question