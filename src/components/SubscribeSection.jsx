import '../styles/SubscribeSection.css'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'
import squirrel from '../assets/squirrel.jpg'
import { use } from 'react'

function SubscribeSection() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        acceptance: false
    })

    const formFns = (() => {

        function changeName(e) {
            setFormData({...formData, name: e.target.value})
        }

        function changeEmail(e) {
            setFormData({...formData, email: e.target.value})
        }

        function changeAcceptance(e) {
            setFormData({...formData, acceptance: e.target.value})
        }

        return {changeName, changeEmail, changeAcceptance}
    })()

    function links() {
        return <span>I accept the <a href="#">terms and conditions</a></span>
    }

    return (
        <div className="sections subscribe">
            <div className="container">
                <div className="content">
                    <h2 className="h2">Subscribe to <span className="orange_text">SleepApp</span> weekly <span className="orange_text">Tips&Tricks</span> and relax</h2>
                    <div className="p main_text">Get 15% off by subscription</div>
                    <div className="form_wrapper">
                        <img src={squirrel} alt="Squirrel sleeping on a tree branch" className="img" />
                        <form action="POST" className="form">
                            <Input type="text" name="Name" val={formData.name} fn={formFns.changeName} />
                            <Input type="email" name="Email" val={formData.email} fn={formFns.changeEmail} />
                            <Input type="checkbox" name={links()} val={formData.acceptance} fn={formFns.changeAcceptance} />
                            <Button text="Contact us" altColor={true} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeSection