import { React, createRef, Component } from "react";

import Hero from "../components/Hero";

import "../style/Home.css"

class Home extends Component {

  constructor(props) {
    super(props);
    this.contentRef = createRef();
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  componentDidMount() {
    document.title = "Home";
    document.getElementById("main").classList.add("home");
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    document.getElementById("main").classList.remove("home");
  }

  scrollToContent = () => {
    this.contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <main id="main">
        <Hero scrollto={ this.scrollToContent } />
        <div className="content" ref={ this.contentRef }>
          <h1 className="home-title">Home</h1>
        </div>
      </main>
    );
  }
}

export default Home;