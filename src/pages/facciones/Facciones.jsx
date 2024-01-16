import NavBar from "../../components/navBar/NavBar";
import { BannerAbadia, BannerAcechadores, BannerComerciantes, BannerCorona, BannerDoctos, BannerEscuadronBalnafog, BannerLanza, BannerOrden } from "../../components/svg/Banners";
import './Facciones.css';

const Facciones = () => {
    return ( 
    <div className="FaccionesPage">
        <NavBar pagina={3}/>
        <Header/>
        <div className="facciones-container">
            
            <Faccion 
                style="corona"
                Banner={BannerCorona}
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque architecto expedita ratione magni corporis praesentium, molestiae eligendi temporibus. Nulla, totam. Libero molestias dignissimos nesciunt, quibusdam saepe sint doloremque harum."
            >
                <p className="h6" >la Corona del</p> 
                <p className="h5">Reino de Laiss</p> 
            </Faccion>
            <Faccion 
                style="abadia"
                Banner={BannerAbadia}
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque architecto expedita ratione magni corporis praesentium, molestiae eligendi temporibus. Nulla, totam. Libero molestias dignissimos nesciunt, quibusdam saepe sint doloremque harum."
            >
                <p className="h6" >la Abadía</p> 
                <p className="h4">Del alba</p> 
            </Faccion>
            <Faccion 
                style="acechadores"
                Banner={BannerAcechadores}
                text="Los Acechadores del Ocaso son una organización que ha estado activa en el reino durante siglos. También conocidos como los 'Hijos de la Primera Traición', son conocidos por sus negocios turbios y su falta de escrúpulos. Aunque no todos sus negocios son ilegales, tienen fama de ser el mayor y más antiguo gremio criminal del reino."
            >
                <p className="h6">los acechadores</p> 
                <p className="h4">del ocaso</p> 
            </Faccion>
            <Faccion 
                style="escuadron"
                Banner={BannerEscuadronBalnafog}
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque architecto expedita ratione magni corporis praesentium, molestiae eligendi temporibus. Nulla, totam. Libero molestias dignissimos nesciunt, quibusdam saepe sint doloremque harum."
            >
                <p className="h6" >Escuadrón</p> 
                <p className="h4">Balnafog</p> 
            </Faccion>
            <Faccion 
                style="lanza"
                Banner={BannerLanza}
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque architecto expedita ratione magni corporis praesentium, molestiae eligendi temporibus. Nulla, totam. Libero molestias dignissimos nesciunt, quibusdam saepe sint doloremque harum."
            >
                <p className="h6" >orden</p> 
                <p className="h5">Lanza Roble</p> 
            </Faccion>
            <Faccion 
                style="comerciantes"
                Banner={BannerComerciantes}
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque architecto expedita ratione magni corporis praesentium, molestiae eligendi temporibus. Nulla, totam. Libero molestias dignissimos nesciunt, quibusdam saepe sint doloremque harum."
            >
                <p className="h6" >Gremio de</p> 
                <p className="h5">Comerciantes</p> 
                <p className="h5">de Laiss</p> 
            </Faccion>
            <Faccion 
                style="doctos"
                Banner={BannerDoctos}
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque architecto expedita ratione magni corporis praesentium, molestiae eligendi temporibus. Nulla, totam. Libero molestias dignissimos nesciunt, quibusdam saepe sint doloremque harum."
            >
                <p className="h6" >congregación de</p> 
                <p className="h5">doctos de</p> 
                <p className="h5">Krowen</p> 
            </Faccion>
            <Faccion 
                style="orden"
                Banner={BannerOrden}
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque architecto expedita ratione magni corporis praesentium, molestiae eligendi temporibus. Nulla, totam. Libero molestias dignissimos nesciunt, quibusdam saepe sint doloremque harum."
            >
                <p className="h6" >La orden</p> 
                <p className="h5">de los cinco</p> 
            </Faccion>
        </div>
    </div> );
}
 
export default Facciones;

const Faccion = ({style, text, children, Banner}) => {
    return ( 
        // <div className="faccion" style={{"background": "var(--"+style+"-background"}}>
        <div className="faccion">
            <Banner/>
            <div className="title" style={{"color": "var(--"+style+"-text"}}>
                {children}
            </div>
            <p >{text}</p>
        </div>
     );
}
const Header = () => {
    return ( 
        <div className="header">
            <div className="grid">
                <h1 className="h1">Facciones</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aut optio dolorem repellendus velit repudiandae eaque consectetur molestias delectus ipsum iusto vero, beatae odio sint harum tempore voluptas. Molestias, dolorum.</p>
            </div>
        </div>
     );
}
 