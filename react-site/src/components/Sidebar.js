import { React } from "react";
import { GitHub, LinkedIn } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

import "../style/Sidebar.css";


const Sidebar = () => {

    return (
        <div className="sidebar">
            <img src="/hero.jfif" alt="Normal" />
            <div className="side-bar-wrapper">

                <h1>Tim Lor</h1>
                <p>Software Developer</p>
                <div className="socials">
                    <a className="social-icons" href="https://github.com/tulxoro" target="_blank" rel="noreferrer">
                        <SvgIcon component={ GitHub } />
                        <span className="social-links" >tulXoro</span>
                    </a>

                    <a className="social-icons" href="https://www.linkedin.com/in/tulxoro/" target="_blank" rel="noreferrer">
                        <SvgIcon component={ LinkedIn } />
                        <span className="social-links" >Tim Lor</span>
                    </a>       
                </div>
            </div>
        </div>
    );
};

export default Sidebar;