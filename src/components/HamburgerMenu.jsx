import '../styles/HamburgerMenu.css'
import LinkButton from './LinkButton'

function HamburgerMenu({isOpened}) {

    return(
        <div className={isOpened ? 'ham_menu visible' : 'ham_menu'}>
            <div className="ham_menu_section">
                <LinkButton text={'Features'} />
            </div>
            <div className="ham_menu_section">
                <LinkButton text={'Price'} />
            </div>
            <div className="ham_menu_section">
                <LinkButton text={'Contacts'} />
            </div>
        </div>
    )
}

export default HamburgerMenu