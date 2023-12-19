import { useRef, useState } from "react";
import Botonera from "./Botonera";

var defaultViewBox = {
  x: 0,
  y: 0,
  width: 4000,
  height: 2000
};
let pivot = {x:0,y:0};
let newPosition = { x: 0, y: 0}
const clamp = (num, min, max) =>Math.min(Math.max(num, min), max)


const MapController = ({children, vBox, useVBox, normalViewBox=defaultViewBox, btns=true, cursorEvents=true }) => {
    const [mouseHold, useMouseHold] = useState(false);
    const mapRef = useRef();

    const calculateBorders = () => {
        let divWidth = mapRef.current.clientWidth;
        let divHeight = mapRef.current.clientHeight;
        let x = normalViewBox.width - ((vBox.height/ divHeight) * divWidth)
        let y = normalViewBox.height - ((vBox.width / divWidth) * divHeight)

        let vBoxAspecRatio = vBox.width / vBox.height;
        let divAspecRatio = divWidth / divHeight
        // cuando divAspectRatio es mayor el tamaño depende del Width
        // por lo que el maximo X es igual a 3800 menos el Width.

        if (divAspecRatio > vBoxAspecRatio){
            return({
                x: normalViewBox.width - vBox.width,
                y
            })
        }
        return({
            x , 
            y: normalViewBox.height - vBox.height
        })
    }

    const MoveMap = (x,y) => {
        let maxBorder = calculateBorders();

        let newX = clamp(vBox.x + x, 0, maxBorder.x);
        let newY = clamp(vBox.y + y, 0, maxBorder.y);
        useVBox((current)=>{
            return {...current, x: newX, y: newY}
        })
    }

    const ZoomMap = (z) => {
        let zoom = z;

        let aspecRatio = normalViewBox.width / normalViewBox.height;
        let minSize = {
            width: normalViewBox.width - 250 * aspecRatio * 5,
            height: normalViewBox.height - 250 * 5
        }

        let newWidth = clamp(vBox.width + zoom * aspecRatio, minSize.width, normalViewBox.width);
        let newHeight = clamp(vBox.height + zoom, minSize.height, normalViewBox.height);

        if(newWidth === vBox.width){
            return
        }

        let newX = clamp(vBox.x - (zoom * aspecRatio)/2, 0, normalViewBox.width - newWidth)
        let newY = clamp(vBox.y - zoom/2, 0, normalViewBox.height- newHeight);

        var newViewBox = {
            ...vBox,
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight,
        };
        useVBox(newViewBox)
    }


    const MapScrollEvent = (e) => {
        if (!cursorEvents) return;
        ZoomMap(e.deltaY);
    }

    const MapMouseDown = (e) =>{
        e.preventDefault()
        useMouseHold(true);
        if (e.targetTouches){
            pivot={ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY }
        }
        else{
            pivot={ x: e.clientX, y: e.clientY }
        }
    }
    const MapClear = (e) =>{
        e.preventDefault();
        useMouseHold(false);
    }
    const MapMouseOver = (e) =>{
        if(!mouseHold){return}
        e.stopPropagation();
        e.preventDefault();

        // newPosition.x = pivot.x - e.clientX ;
        // newPosition.y = pivot.y - e.clientY;

        if (e.targetTouches){
            newPosition.x = pivot.x - e.targetTouches[0].clientX ;
            newPosition.y = pivot.y - e.targetTouches[0].clientY;
        }
        else{
            newPosition.x = pivot.x - e.clientX ;
            newPosition.y = pivot.y - e.clientY;
        }

        MoveMap(newPosition.x, newPosition.y);

        if (e.targetTouches){
            pivot = {x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY}
        }
        else{
            pivot = {x:e.clientX,y:e.clientY}
        }
        

    }

    return ( 
        <div ref={mapRef} 
            className="controller-container"
            onWheel={MapScrollEvent} 
            onPointerDown={MapMouseDown} 
            onPointerMove={MapMouseOver} 
            onPointerLeave={MapClear} 
            onPointerUp={MapClear}
        >
            { btns && <Botonera Move={MoveMap} Zoom={ZoomMap}/> }
            {children}
        </div>
     );
}
 
export default MapController;