import './Botonera.css';

const Botonera = ({Move, Zoom}) => {
    return ( 
        <svg className='Botonera' viewBox="0 0 569 287" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="btn-zoom" onClick={e => Zoom(-100)}>
                <path d="M182 175H261.394L282 206L261.394 237H182V175Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M218.518 203.882L216.311 189.895L231.749 182L244 194.296L236.134 209.79L222.198 207.575L208.68 221.142L205 217.449L218.518 203.882ZM223.569 202.505L233.214 204.038L237.647 195.306L230.742 188.376L222.042 192.825L223.569 202.505Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M230.172 222.007H225.197V218.276H230.172V213.283H233.889V218.276H238.864V222.007H233.889V227H230.172V222.007Z" fill="white"/>
            </g>
            <g className="btn-zoom" onClick={e => Zoom(100)}>
                <path d="M148 175H68.6061L48 206L68.6061 237H148V175Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M96.5181 203.878L94.3107 189.893L109.749 182L122 194.294L114.134 209.786L100.198 207.571L86.6796 221.136L83 217.443L96.5181 203.878ZM101.569 202.502L111.214 204.035L115.647 195.304L108.742 188.375L100.042 192.824L101.569 202.502Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M103.197 222V218.27H116.864V222H103.197Z" fill="white"/>
            </g>
            <g className="btn-arrow right" onClick={e => Move(50,0)}>
                <path d="M463.888 114.102L496.662 81.3278L522 142.5L496.662 203.672L463.888 170.898V114.102Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M498.264 142.5L486.729 114.653L495.241 111.127L508.236 142.5L495.241 173.873L486.729 170.347L498.264 142.5Z" fill="white"/>
            </g>
            <g className="btn-arrow top" onClick={e => Move(0,-50)}>
                <path d="M447.898 98.1124H391.102L358.328 65.3383L419.5 40L480.672 65.3383L447.898 98.1124Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M419.5 53.764L450.873 66.7591L447.347 75.2704L419.5 63.7356L391.652 75.2704L388.127 66.7591L419.5 53.764Z" fill="white"/>
            </g>
            <g className="btn-arrow left" onClick={e => Move(-50,0)}>
                <path d="M375.112 114.102L342.338 81.3278L317 142.5L342.338 203.672L375.112 170.898V114.102Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M340.735 142.5L352.27 114.653L343.759 111.127L330.764 142.5L343.759 173.873L352.27 170.347L340.735 142.5Z" fill="white"/>
            </g>
            <g className="btn-arrow bottom" onClick={e => Move(0,50)}>
                <path d="M419.5 245L358.328 219.662L391.102 186.888H447.898L480.672 219.662L419.5 245Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M419.5 221.264L391.652 209.73L388.127 218.241L419.5 231.236L450.873 218.241L447.347 209.73L419.5 221.264Z" fill="white"/>
            </g>
        </svg>

     );
}
 
export default Botonera;