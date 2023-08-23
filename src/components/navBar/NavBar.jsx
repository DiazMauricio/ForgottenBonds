import Logo from "../svg/Logo";
import './NavBar.css';
import { Link } from "react-router-dom"

const NavBar = ({pagina = 1}) => {
    return ( 
        <div className="navbar-container">
            <nav className="navbar">
                <ul>
                    <div className="logo-container">
                        <Logo version="v2"/>
                    </div>                    
                    <li className={pagina===1 ? "selected":""}><Link to="/">Inicio</Link></li>
                    <li className={pagina===2 ? "selected":""}><Link to="/mapa">mapa</Link></li>
                    <li className={pagina===3 ? "selected":""}><Link to="/facciones">facciones</Link></li>
                    <li className={pagina===4 ? "selected":""}><Link to="/deidades">deidades</Link></li>
                    <li className={pagina===5 ? "selected":""}><Link to="/historia">historia</Link></li>
                    <li className={pagina===6 ? "selected":""}><Link to="/registro">registro</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;