import '../styles/HamburgerMenu.css'
import LinkButton from './LinkButton'

function HamburgerMenu({fns, isOpened}) {

    return(
        <div className={isOpened ? 'ham_menu visible' : 'ham_menu'}>
            <div className="ham_menu_section">
                <LinkButton text={'Features'} fn={fns.scrollToFind} />
            </div>
            <div className="ham_menu_section">
                <LinkButton text={'Price'} fn={fns.scrollToPrice} />
            </div>
            <div className="ham_menu_section">
                <LinkButton text={'Contacts'} fn={fns.scrollToSub} />
            </div>
        </div>
    )
}

export default HamburgerMenu