import './navBar.scss';
import Logo from './carcleanersLogo.jpeg'



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
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
