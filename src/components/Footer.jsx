import '../styles/Footer.css'
import LinkButton from './LinkButton'
import email from '../assets/icons/email.svg'
import instagram from '../assets/icons/instagram.svg'
import telegram from '../assets/icons/telegram.svg'
import twitter from '../assets/icons/twitter.svg'

function Footer() {

    return(
        <footer className="section footer">
            <div className="container">
                <div className="copyright">
                    <p className="p copyright_title">SleepApp</p>
                    <div className="p copyright_text">© 2024 SleepApp</div>
                </div>
                <div className="links">
                    <LinkButton text="sleepapp@gmail.com" icon={email} />
                    <div className="policies">
                        <LinkButton text="Payment security" />
                        <LinkButton text="Privacy policy" />
                    </div>
                </div>
                <div className="socials">
                    <LinkButton icon={instagram} />
                    <LinkButton icon={telegram} />
                    <LinkButton icon={twitter} />
                </div>
            </div>
        </footer>
    )
}

export default Footer