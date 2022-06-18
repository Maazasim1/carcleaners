import './navBar.scss';
import Logo from './carcleanersLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import MyForm from './convoform';
import {useState} from 'react'


library.add(faCalendarCheck);


function NavBar() {
    const [html, setHtml] = useState(null);

    function renderHtml(){
        return(
            <div>

                <MyForm className='formconvo'></MyForm>
            </div>
       
        );
    }
    return (
        <div className="NavBar">
            {html}
            <nav>
                <ul className="menu">
                    <img className='logo' src={Logo} alt='Car Cleaners Logo' ></img>
                    <li><a href="#Home">HOME</a></li>
                    <li><a href="#About">ABOUT</a></li>
                    <li><a href="#Services">SERVICES</a></li>
                    <li><a href="#Testimonials">TESTIMONIALS</a></li>
                    <li><a href="#package">PACKAGES</a></li>
                    <div className='appButton'>
                        <button onClick={(() => setHtml(renderHtml()))} style={{ fontSize: 20 }} className="book">
                            <FontAwesomeIcon icon="calendar-check" className='iconCal' />
                            BOOK APPOINTMENT
                        </button>


                    </div>

                </ul>
            </nav>

        </div >
    );
}

export default NavBar;
