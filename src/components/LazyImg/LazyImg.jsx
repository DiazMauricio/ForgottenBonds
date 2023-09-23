
import './LazyImg.css'
const LazyImg = ({src, smallSrc, alt}) => {
    console.log(smallSrc);
    return ( 
        <div className="LazyImg" style={{backgroundImage: `url(${smallSrc})` }}>
            <img loading="lazy"
                alt={alt}
                src={src}
            />
        </div>
     );
}
 
export default LazyImg;