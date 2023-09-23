import { useEffect, useState,  useRef  } from "react";
import NavBar from "../../components/navBar/NavBar";
import MapaGlobal from "../../components/svg/MapaGobla";
import MapController from "../mapa/MapController";
import Compas from "../../components/svg/Compas";
import './Historia.css';
import { RegistrosFundacion, RegistrosModerno } from "./Registros";

const defaultViewBox = {
  x: 0,
  y: 0,
  width: 4300,
  height: 1500
};

const Historia = () => {
    const [vBox, useVBox] = useState(defaultViewBox)
    const [shortMap, useShortMap] = useState(false)

    const onWheel = (e) =>{
        useShortMap((current)=> window.scrollY > 10);
    }
    return ( 
    <div className="HistoriaPage" onWheel={onWheel}>
        <NavBar pagina={5}/>
        <div className={"mapContainer " + (shortMap && "short")} >
            <MapController vBox={vBox} useVBox={useVBox} normalViewBox={defaultViewBox} cursorEvents={false}>
                <Compas/>
                <MapaGlobal vbox={vBox}/>
            </MapController>
        </div>
        <RegistrosFundacion/>
        <RegistrosModerno/>
    </div> 
    );
}
 
export default Historia;

