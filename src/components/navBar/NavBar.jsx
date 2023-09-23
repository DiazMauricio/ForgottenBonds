import { useState } from "react";
import BurgerIcon from "../svg/BurguerIcon";
import Logo from "../svg/Logo";
import './NavBar.css';
import { Link } from "react-router-dom"

const NavBar = ({pagina = 1}) => {
    const [show, useShow] = useState(false)
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
                    <li className={pagina===6 ? "selected":""}><Link to="/bitacora">Bitacora</Link></li>
                    <button className={"BurguerIcon "+ (show?"show":"")} onClick={()=>{useShow(!show)}}>
                        <BurgerIcon/>
                    </button>
                </ul>
            </nav>
            <nav className={"navbar-desplegable "+ (show?"show":"")}>
                <ul>
                    <li className={pagina===1 ? "selected":""}><Link to="/">Inicio</Link></li>
                    <li className={pagina===2 ? "selected":""}><Link to="/mapa">mapa</Link></li>
                    <li className={pagina===3 ? "selected":""}><Link to="/facciones">facciones</Link></li>
                    <li className={pagina===4 ? "selected":""}><Link to="/deidades">deidades</Link></li>
                    <li className={pagina===5 ? "selected":""}><Link to="/historia">historia</Link></li>
                    <li className={pagina===6 ? "selected":""}><Link to="/bitacora">Bitacora</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;