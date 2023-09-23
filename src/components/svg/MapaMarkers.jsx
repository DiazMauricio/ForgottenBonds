import { useEffect, useRef} from 'react';
import { gsap } from "gsap";
import './MapaMarkers.css';


const defaultViewBox = {
  x: 0,
  y: 0,
  width: 4000,
  height: 2000
};

const MapaMarkers = ({vbox = defaultViewBox, MarkerClass = ""}) => {
    const svgRef = useRef();

    useEffect(()=>{
        gsap.timeline({default:{duration:0.1}})
        .to(svgRef.current, {attr:{viewBox: `${vbox.x} ${vbox.y} ${vbox.width} ${vbox.height}`}})
    }, [vbox])

    return ( 
        <svg className="MapaMarkers-svg" ref={svgRef} viewBox="0 0 4000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className={"marker "+ (MarkerClass==="m1" && "active")}>
                <path d="M1874.21 545L1856 499.441L1862.95 478L1885.46 478L1892.41 499.441L1874.21 545Z" fill="#7D1717"/>
                <path d="M1874.21 502.033L1865.9 496.12L1869.07 486.553L1879.34 486.553L1882.52 496.12L1874.21 502.033Z" fill="white"/>
            </g>
            <g className={"marker "+ (MarkerClass==="m2" && "active")}>
                <path d="M2051.21 370L2033 324.441L2039.95 303L2062.46 303L2069.41 324.441L2051.21 370Z" fill="#7D1717"/>
                <path d="M2051.21 327.033L2042.9 321.12L2046.07 311.553L2056.34 311.553L2059.52 321.12L2051.21 327.033Z" fill="white"/>
                <path d="M1874.5 545L1945 502L1986 415.5L2050 367.5" stroke="black" strokeWidth="6" strokeDasharray="12 12"/>
            </g>
            <g className={"marker "+ (MarkerClass==="m3" && "active")}>
                <path d="M1874.5 545L1945 502L1986 415.5L2050 367.5L2010 468.5L1894 545" stroke="black" strokeWidth="6" strokeDasharray="12 12"/>
                <path d="M1889.21 555L1871 509.441L1877.95 488L1900.46 488L1907.41 509.441L1889.21 555Z" fill="#7D1717"/>
                <path d="M1889.21 512.033L1880.9 506.12L1884.07 496.553L1894.34 496.553L1897.52 506.12L1889.21 512.033Z" fill="white"/>
            </g>
            <g className={"marker "+ (MarkerClass==="m4" && "active")}>
                <path d="M1874.5 545L1945 502L1986 415.5L2050 367.5L2010 468.5L1894 545L1974.5 534.5L2227.5 550.5L2314.5 667V715L2421 823L2426.5 921L2471.5 952V995.5L2442.5 990.5" stroke="black" strokeWidth="6" strokeDasharray="12 12"/>
                <path d="M2442.21 982L2424 936.441L2430.95 915L2453.46 915L2460.41 936.441L2442.21 982Z" fill="#7D1717"/>
                <path d="M2442.21 939.033L2433.9 933.12L2437.07 923.553L2447.34 923.553L2450.52 933.12L2442.21 939.033Z" fill="white"/>
            </g>
            <g className={"marker "+ (MarkerClass==="m5" && "active")}>
                <path d="M1874.5 545L1945 502L1986 415.5L2050 367.5L2010 468.5L1894 545L1974.5 534.5L2227.5 550.5L2314.5 667V715L2421 823L2426.5 921L2471.5 952V995.5L2442.5 990.5L2462.5 1011.5L2426.5 1043V1071L2471.5 1100.5" stroke="black" strokeWidth="6" strokeDasharray="12 12"/>
                <path d="M2473.21 1106L2455 1060.44L2461.95 1039L2484.46 1039L2491.41 1060.44L2473.21 1106Z" fill="#7D1717"/>
                <path d="M2473.21 1063.03L2464.9 1057.12L2468.07 1047.55L2478.34 1047.55L2481.52 1057.12L2473.21 1063.03Z" fill="white"/>
            </g>
            <g className={"marker "+ (MarkerClass==="m6" && "active")}>
                <path d="M1874.5 545L1945 502L1986 415.5L2050 367.5L2010 468.5L1894 545L1974.5 534.5L2227.5 550.5L2314.5 667V715L2421 823L2426.5 921L2471.5 952V995.5L2442.5 990.5L2462.5 1011.5L2426.5 1043V1071L2471.5 1100.5L2442.5 1108L2471.5 1124.5L2477.5 1180.5L2528.5 1217.5L2534.5 1238.5L2576.5 1243.5H2772" stroke="black" strokeWidth="6" strokeDasharray="12 12"/>
                <path d="M2772.21 1239L2754 1193.44L2760.95 1172L2783.46 1172L2790.41 1193.44L2772.21 1239Z" fill="#7D1717"/>
                <path d="M2772.21 1196.03L2763.9 1190.12L2767.07 1180.55L2777.34 1180.55L2780.52 1190.12L2772.21 1196.03Z" fill="white"/>
            </g>
        </svg>
     );
}
 
export default MapaMarkers;