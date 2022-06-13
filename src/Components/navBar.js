import './navBar.scss';
import Logo from './carcleanersLogo.png'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faCalendarCheck);



function NavBar() {
  
    return (
        <div className="NavBar">
            <nav>
                <ul className="menu">
                    <img className='logo' src={Logo} ></img>
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Contact</a></li>
                    <li><a href="#!">Faq</a></li>
                    <div>
                    <motion.a whileHover={{ color: 'red' }} whileTap={{ scale: 0.9 }} className="book">
                    <FontAwesomeIcon icon="calendar-check" className='iconCal'/>
                        BOOK APPOINTMENT
           
                    </motion.a>

                    </div>

                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
