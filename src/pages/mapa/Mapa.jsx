import { useState } from "react";
import HalfPageContainer from "../../components/HalfPageContainer/HalfPageContainer";
import NavBar from "../../components/navBar/NavBar";
import { Ciudades } from "./Ciudades";
import "./Mapa.css"
import MapController from "./MapController";

const defaultViewBox = {
  x: 0,
  y: 0,
  width: 4000,
  height: 2000
};

const Mapa = () => {
    const [showInfo,useShowInfo] =  useState(false)
    const [vBox, useVBox] = useState(defaultViewBox)
    const [ciudad, useCiudad] = useState(0);


    const toggleInfo = () =>{
        useShowInfo(!showInfo);
        if(!showInfo){
            useVBox(Ciudades[ciudad].viewBox)
        }
    }

    const ChangeContent = (i) =>{
        let index = ciudad + i;
        if (index >= Ciudades.length){
            index -= Ciudades.length;
        }
        if (index < 0){
            index += Ciudades.length;
        }
        useCiudad(index)
        useVBox(Ciudades[index].viewBox)
    }


    return ( 
    <>
        <NavBar pagina={2}/>
        <div className={"MapaPage " + (showInfo? "active": "")}>
            <MapController vBox={vBox} useVBox={useVBox}>
                <ToggleBtn onClick={toggleInfo}/>
            </MapController>
            <HalfPageContainer Content={Ciudades[ciudad].ciudad} ChangeContent={ChangeContent}/>
        </div>
    </> 
     );
}
export default Mapa;

const ToggleBtn = ({onClick}) => {
    return ( 
        <div className="toggleBtn" onClick={onClick}>
            <div className="toggleBtn-svgcontainer">
                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 20L11 11M11 11L2 2M11 11L20 2M11 11L20 20" stroke="white" strokeWidth="5"/>
                </svg>
                <svg viewBox="-5 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.76771 0.232178L14.5355 10.9999L3.76771 21.7677L0.232178 18.2322L7.46441 10.9999L0.232178 3.76771L3.76771 0.232178Z" fill="white"/>
                </svg>            
            </div>
        </div>
     );
}