import Logo from "../svg/Logo";
import './NavBar.css';
import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <div className="navbar-container">
            <nav className="navbar">
                <ul>
                    <div className="logo-container">
                        <Logo version="v2"/>
                    </div>                    
                    <li className="selected"><Link to="/">Inicio</Link></li>
                    <li><Link to="/mapa">mapa</Link></li>
                    <li><Link to="/facciones">facciones</Link></li>
                    <li><Link to="/deidades">deidades</Link></li>
                    <li><Link to="/historia">historia</Link></li>
                    <li><Link to="/registro">registro</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;