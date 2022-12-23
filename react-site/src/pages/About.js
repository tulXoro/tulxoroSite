import React from "react";


import Sidebar from "../components/Sidebar";

import "../style/About.css";

class About extends React.Component {

  componentDidMount() {
    document.title = "About";
    document.getElementById("main").classList.add("about");
  }

  componentWillUnmount() {
    document.getElementById("main").classList.remove("about");
  }

  render() {
    return (
      <main id="main">
        <Sidebar />
      </main>
    );
  }
}

export default About;

