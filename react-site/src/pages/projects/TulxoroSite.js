import { React } from "react";
import { Box, Grid, Typography } from "@mui/material";


class TulxoroSite extends React.Component {

    componentDidMount() {
        document.title = "Tulxoro Site";
        document.getElementById("main").classList.add("tulxoro-site");
    }

    componentWillUnmount() {
        document.getElementById("main").classList.remove("tulxoro-site");
    }

    render() {
        return (
            <main id="main">
                <h1 className="tulxoro-site-title">Tulxoro Site</h1>

            </main>
        );
    }
}

export default TulxoroSite;