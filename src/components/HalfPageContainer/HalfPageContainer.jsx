import "./HalfPageContainer.css"
const Test = () => {
    return (  <></>);
}

const HalfPageContainer = ({Content = Test, ChangeContent}) => {
    return ( 
        <div className="HalfPageContainer">
            <div className="HalfPageContainer-scroll">
                <div className="HalfPageContainer-text">
                    <Content/>
                </div>
            </div>
            <div className="HalfPageContainer-buttons">
                <button className="btn-small" onClick={()=>{ChangeContent(-1)}}>Anterior</button>
                <button className="btn-small" onClick={()=>{ChangeContent(1)}}>siguiente</button>
            </div>
        </div>
    );
}
 
export default HalfPageContainer;
