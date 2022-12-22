import { React, createRef } from "react";

import "../style/Hero.css";

const Hero = (props) => {

    let contentRef = createRef();

    return (
        <div className="hero">
            <div className="scroll-down" onClick={ props.scrollto }>
                !!Scroll down!!
            </div>
        </div>
    );
};


export default Hero;