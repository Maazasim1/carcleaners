import './navBar.scss';
import Logo from './carcleanersLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { PopupButton } from '@typeform/embed-react'


library.add(faCalendarCheck);


function NavBar() {

    return (
        <div className="NavBar">
            <nav>
                <ul className="menu">
                    <img className='logo' src={Logo} alt='Car Cleaners Logo' ></img>
                    <li><a href="#Home">HOME</a></li>
                    <li><a href="#About">ABOUT</a></li>
                    <li><a href="#Services">SERVICES</a></li>
                    <li><a href="#Testimonials">TESTIMONIALS</a></li>
                    <li><a href="#package">PACKAGES</a></li>
                    <div className='appButton'>
                        <PopupButton id="YLHX9wHn" style={{ fontSize: 20 }} className="book">
                            <FontAwesomeIcon icon="calendar-check" className='iconCal' />
                            BOOK APPOINTMENT
                        </PopupButton>


                    </div>

                </ul>
            </nav>

        </div >
    );
}

export default NavBar;
