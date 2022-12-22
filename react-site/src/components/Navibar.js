import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


import "../style/Navibar.css";

const Navibar = () => {
    const location = useLocation();

    const [navibar, setNavibar] = useState(false);

    useEffect(() => {

        const appearNavibar = () => {
            if(location.pathname !== "/") {
                setNavibar(true);
            } else if (window.scrollY >= 500) {
                setNavibar(true);
            } else {
                setNavibar(false);
            }
        };

        appearNavibar();

        window.addEventListener("scroll", appearNavibar);

    }, [location.pathname]);


    return (
        <nav className={navibar ? "navibar sticky" : "hidden"}>
            <ul className="navi-links">
                <li className="navi-items">
                    <Link className="page-link" to="/">Home</Link>
                </li>
                <li className="navi-items">
                    <Link className="page-link" to="/about">About</Link>
                </li>
                <li className="navi-items">
                    <Link className="page-link" to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navibar;