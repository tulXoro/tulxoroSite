import { React } from "react";

import "../style/Hero.css";

const Hero = (props) => {

    return (
        <div className="hero">
            <div className="scroll-down" onClick={ props.scrollto }>
                !!Scroll down!!
            </div>
        </div>
    );
};


export default Hero;