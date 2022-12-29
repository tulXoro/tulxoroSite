import { React } from "react";

import "../style/Hero.css";

const Hero = (props) => {

    return (
        <div className="hero">
            <div className="hero-about">
                <h1 className="hero-title">Welcome!</h1>
                <p className="hero-description">This is my portfolio website!</p>
            </div>
            
            <div className="scroll-down" onClick={ props.scrollto }>
                !!Scroll down!!
            </div>
        </div>
    );
};


export default Hero;