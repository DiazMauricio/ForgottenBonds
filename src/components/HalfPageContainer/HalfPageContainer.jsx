import { useRef } from "react";
import "./HalfPageContainer.css"
const Test = () => {
    return (  <></>);
}

const HalfPageContainer = ({Content = Test, ChangeContent}) => {
    const containerRef = useRef();

    const ChangePage = (i) => {
        ChangeContent(i);
        containerRef.current.scrollTop = 0;
    }

    return ( 
        <div className="HalfPageContainer">
            <div className="HalfPageContainer-scroll" ref={containerRef}>
                <div className="HalfPageContainer-text" >
                    <Content/>
                </div>
            </div>
            <div className="HalfPageContainer-buttons">
                <button className="btn-small" onClick={()=>{ChangePage(-1)}}>Anterior</button>
                <button className="btn-small" onClick={()=>{ChangePage(1)}}>siguiente</button>
            </div>
        </div>
    );
}
 
export default HalfPageContainer;
