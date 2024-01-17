import { useState } from "react";
import { Registros } from "./Registros";
import HalfPageContainer from "../../components/HalfPageContainer/HalfPageContainer";
import NavBar from "../../components/navBar/NavBar";
import MapaLaiss from "../../components/svg/MapaLaiss";
import Compas from "../../components/svg/Compas";
import MapaMarkers from "../../components/svg/MapaMarkers";
import MapController from "../mapa/MapController";

const defaultViewBox = {
    x:1527, 
    y:315,  
    width: 1207, 
    height: 605
};

const Bitacora = () => {
    const [vBox, useVBox] = useState(defaultViewBox);
    const [registro, useRegistro] = useState(0);

    const ChangeContent = (i) =>{
        let index = registro + i;
        if (index >= Registros.length){
            index -= Registros.length;
        }
        if (index < 0){
            index += Registros.length;
        }
        useRegistro(index)
        useVBox(Registros[index].viewBox)
    }

    return (
        <>
        <NavBar pagina={6}/>
         <div className={"MapaPage active"}>
            <MapController vBox={vBox} useVBox={useVBox} btns={false}>
                <Compas/>
                <MapaMarkers vbox={vBox} MarkerClass={Registros[registro].MarkerClass}/>
                <MapaLaiss vbox={vBox}/>
            </MapController>
            <HalfPageContainer Content={Registros[registro].registro} ChangeContent={ChangeContent}/>
         </div>
        </>
     );
}
 
export default Bitacora;