import './Logo.css';

// props
// version = [v2, v3, v4]
const Logo = ({version=""}) => {
    return ( 
    <svg className={'Logo ' + version} viewBox="0 0 720 333" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="logo-text" d="M228.584 73.2743H258.451L268.407 60H215.31V169.513H218.628L228.584 162.876V106.46H235.221L245.177 93.1858H228.584V73.2743Z" />
        <path className="logo-text" d="M507.345 60H497.721L494.071 66.6372V73.2743H477.478L487.434 86.5487H494.071V159.558H497.389L507.345 146.283V86.5487H513.982V83.2301L520.619 73.2743H507.405L507.345 60Z" fill="black"/>
        <path className="logo-text" d="M547.229 66.6372L544.181 60H533.955V73.2743H530.575L523.938 83.2301V86.5487H533.955V159.558H537.212L547.229 146.283V86.5487H554.09L563.761 73.2743H547.229V66.6372Z" fill="black"/>
        <path className="logo-text" d="M626.791 146.283H613.54V89.8673H623.496L626.814 92.3382C627.76 91.0244 628.861 89.9214 630.167 89.0413C632.67 87.355 635.75 86.5487 639.338 86.5487C645.468 86.5487 650.42 88.7487 654.072 93.1784C657.714 97.5201 659.892 102.994 660 109.447V146.283H646.726V109.858C646.726 107.062 645.59 104.687 643.534 102.696C641.472 100.667 639.04 99.6628 636.197 99.6628C633.388 99.6628 630.98 100.627 628.921 102.584C627.813 103.723 627.132 104.619 626.791 105.285V146.283Z" fill="black" />
        <path className="logo-text" fillRule="evenodd" clipRule="evenodd" d="M237.905 262.421C243.767 262.346 249.46 259.173 254.977 253.447C260.933 247.278 263.927 239.921 263.927 231.432C263.927 223.019 261.538 216.29 256.639 211.392C253.273 208.004 250.078 205.605 247.057 204.318C247.5 204.318 253.473 199.381 253.473 192.743C253.473 182.788 248.496 172.832 233.426 172.832H228.38L218.628 179.469H215.31V262.421L237.905 262.421ZM241.021 247.968C239.729 248.841 238.683 249.247 237.853 249.307H228.38V213.924H233.074C237.905 213.924 242.007 215.642 245.429 219.094C248.883 222.513 250.595 226.605 250.595 231.432C250.595 236.335 248.878 240.539 245.414 244.1C243.785 245.796 242.319 247.092 241.021 247.968ZM234.598 200.525L234.578 200.526C234.462 200.533 234.362 200.54 234.281 200.548H228.38V186.225H233.389C235.152 186.225 241.858 186.225 241.858 192.743C241.858 200.045 236.399 200.406 234.598 200.525Z" fill="black"/>
        <path className="logo-text" d="M382.076 209.328C385.719 213.67 387.768 219.144 387.876 225.597V262.434H374.602L374.602 225.929C374.602 223.133 373.595 220.838 371.539 218.847C369.476 216.817 367.045 215.813 364.202 215.813C361.392 215.813 358.985 216.777 356.925 218.734C355.817 219.874 355.031 220.949 354.69 221.615L354.667 262.434H341.545L341.416 205.629H351.372L354.69 208.341C355.022 207.677 356.64 206.198 358.172 205.192C361.274 203.154 363.755 202.699 367.343 202.699C373.472 202.699 378.424 204.899 382.076 209.328Z" fill="black" />
        <path className="logo-text" d="M281.682 109.779L275.044 116.416L281.682 123.054L288.319 116.416L281.682 109.779Z" fill="black"/>
        <path className="logo-text" fillRule="evenodd" clipRule="evenodd" d="M311.549 116.416C311.549 132.911 298.177 146.283 281.681 146.283C265.186 146.283 251.814 132.911 251.814 116.416C251.814 99.9207 265.186 86.5487 281.681 86.5487C298.177 86.5487 311.549 99.9207 311.549 116.416ZM298.274 116.416C298.274 125.58 290.845 133.009 281.681 133.009C272.517 133.009 265.088 125.58 265.088 116.416C265.088 107.252 272.517 99.823 281.681 99.823C290.845 99.823 298.274 107.252 298.274 116.416Z" fill="black"/>
        <path className="logo-text" d="M447.611 116.416L454.248 109.779L460.886 116.416L454.248 123.054L447.611 116.416Z" fill="black"/>
        <path className="logo-text" fillRule="evenodd" clipRule="evenodd" d="M484.115 116.416C484.115 132.911 470.743 146.283 454.248 146.283C437.753 146.283 424.38 132.911 424.38 116.416C424.38 99.9207 437.753 86.5487 454.248 86.5487C470.743 86.5487 484.115 99.9207 484.115 116.416ZM470.841 116.416C470.841 125.58 463.412 133.009 454.248 133.009C445.084 133.009 437.655 125.58 437.655 116.416C437.655 107.252 445.084 99.823 454.248 99.823C463.412 99.823 470.841 107.252 470.841 116.416Z" fill="black"/>
        <path className="logo-text" d="M294.955 232.235L301.593 225.597L308.23 232.235L301.593 238.872L294.955 232.235Z" fill="black"/>
        <path className="logo-text" fillRule="evenodd" clipRule="evenodd" d="M331.46 232.566C331.46 249.062 318.088 262.434 301.593 262.434C285.098 262.434 271.726 249.062 271.726 232.566C271.726 216.071 285.098 202.699 301.593 202.699C318.088 202.699 331.46 216.071 331.46 232.566ZM318.186 232.566C318.186 241.73 310.757 249.159 301.593 249.159C292.429 249.159 285 241.73 285 232.566C285 223.402 292.429 215.973 301.593 215.973C310.757 215.973 318.186 223.402 318.186 232.566Z" fill="black"/>
        <path className="logo-text" fillRule="evenodd" clipRule="evenodd" d="M609.889 131.35C606.769 136.754 602.034 141.045 596.35 143.621C590.666 146.196 584.317 146.927 578.197 145.709C572.076 144.492 566.491 141.388 562.225 136.833C557.959 132.278 555.227 126.502 554.412 120.314C553.598 114.127 554.741 107.84 557.683 102.337C560.625 96.833 565.217 92.3889 570.814 89.6287C576.411 86.8687 582.732 85.931 588.889 86.9476C595.046 87.9643 600.73 90.8839 605.143 95.2966L608.687 98.8406L576.38 131.147C578.668 132.337 581.267 133.009 584.024 133.009C590.165 133.009 596.676 130.335 599.545 125.376L609.889 131.35ZM569.325 124.123L591.73 101.718C589.428 100.508 586.806 99.823 584.024 99.823C574.86 99.823 567.431 107.252 567.431 116.416C567.431 119.198 568.115 121.82 569.325 124.123Z" fill="black"/>
        <path className="logo-text" fillRule="evenodd" clipRule="evenodd" d="M428.031 202.699C434.171 202.699 439.878 204.552 444.624 207.729V186.438L451.261 176.482H457.898V262.434H447.598L444.624 257.404C439.878 260.581 434.171 262.434 428.031 262.434C411.536 262.434 398.164 249.062 398.164 232.566C398.164 216.071 411.536 202.699 428.031 202.699ZM428.031 215.973C437.195 215.973 444.624 223.402 444.624 232.566C444.624 241.73 437.195 249.159 428.031 249.159C418.867 249.159 411.438 241.73 411.438 232.566C411.438 223.402 418.867 215.973 428.031 215.973Z" fill="black"/>
        <path className="logo-text" fillRule="evenodd" clipRule="evenodd" d="M414.425 146.283C414.425 152.858 412.255 159.249 408.253 164.465C404.25 169.681 398.638 173.431 392.288 175.133C385.937 176.834 379.202 176.393 373.128 173.877C367.053 171.361 361.979 166.911 358.692 161.217L370.185 154.581C373.054 159.54 378.416 162.876 384.557 162.876C393.721 162.876 401.15 155.447 401.15 146.283V141.254C396.405 144.43 390.697 146.283 384.557 146.283C368.062 146.283 354.69 132.911 354.69 116.416C354.69 99.9207 368.062 86.5487 384.557 86.5487C390.697 86.5487 396.405 88.4014 401.15 91.5781L404.469 89.2035H414.425V146.283ZM401.15 116.416C401.15 125.58 393.721 133.009 384.557 133.009C375.393 133.009 367.965 125.58 367.965 116.416C367.965 107.252 375.393 99.823 384.557 99.823C393.721 99.823 401.15 107.252 401.15 116.416Z" fill="black"/>
        <path className="logo-text" d="M473.946 229.266C475.322 230.966 477.092 232.386 479.137 233.432L490.751 239.703C492.735 240.718 494.071 242.618 494.071 244.794C494.071 248.039 491.099 250.67 487.434 250.67C483.768 250.67 480.796 248.039 480.796 244.794L467.522 244.789C467.522 247.884 468.442 250.924 470.19 253.604C471.937 256.284 474.451 258.51 477.478 260.057C480.505 261.604 483.938 262.419 487.434 262.419C490.929 262.419 494.362 261.604 497.389 260.057C500.416 258.51 502.93 256.284 504.678 253.604C506.425 250.924 507.345 247.884 507.345 244.789C507.345 241.695 506.425 238.655 504.678 235.975C502.93 233.295 500.416 231.069 497.389 229.522L485.774 223.254C484.782 222.746 484.115 221.796 484.115 220.709C484.115 219.086 485.601 217.771 487.434 217.771C488.343 217.771 489.167 218.095 489.767 218.619L492.15 220.688H496.843L503.789 214.539L501.514 212.398L499.168 210.32C497.497 208.841 495.489 207.696 493.278 206.959C491.068 206.223 488.705 205.912 486.348 206.049C483.992 206.186 481.695 206.767 479.612 207.753C477.529 208.738 475.707 210.106 474.269 211.765C472.832 213.425 471.81 215.336 471.274 217.373C470.738 219.41 470.699 221.524 471.16 223.575C471.62 225.626 472.57 227.566 473.946 229.266Z" fill="black"/>
        <path className="logo-text" d="M351.372 99.823C342.211 99.823 334.784 107.247 334.779 116.407V146.283H321.504V86.5487H328.142L333.001 92.8663C335.118 91.2154 337.452 89.8536 339.942 88.8221C343.566 87.3213 347.449 86.5487 351.372 86.5487V99.823Z" fill="black"/>
        <path className="logo-banner" fillRule="evenodd" clipRule="evenodd" d="M60 63.3186L63.3186 60H179.469L182.788 63.3186V249.159L179.469 252.478L162.876 232.566L156.239 239.204H152.92L139.646 225.929L63.3186 272.389L60 269.071V63.3186Z" fill="#952B2B" />
        <path className="logo-star" d="M119.735 89.8672H123.053L126.372 139.646L156.239 142.965V146.283L126.372 149.602L123.053 199.381H119.735L116.416 149.602L86.5486 146.283V142.965L116.416 139.646L119.735 89.8672Z" fill="white"/>
        <path className="logo-star" d="M93.5177 162.876V165.863L100.487 169.181L103.142 175.819H106.46V162.876H93.5177Z" fill="white"/>
        <path className="logo-star" d="M149.27 162.876V165.863L142.301 169.181L139.646 175.819H136.327V162.876H149.27Z" fill="white"/>
        <path className="logo-star" d="M149.27 130.022V127.035L142.301 123.717L139.646 117.08H136.327V130.022H149.27Z" fill="white"/>
        <path className="logo-star" d="M93.5177 130.022V127.035L100.487 123.717L103.142 117.08H106.46V130.022H93.5177Z" fill="white"/>
    </svg>
    );
}
 
export default Logo;