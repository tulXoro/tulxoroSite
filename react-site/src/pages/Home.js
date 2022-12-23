import { React, createRef, Component } from "react";

import Hero from "../components/Hero";

import "../style/Home.css"

class Home extends Component {

  constructor(props) {
    super(props);
    this.contentRef = createRef();
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  scrollToContent = () => {
    this.contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <main id="main">
        <Hero scrollto={ this.scrollToContent } />
        <div className="content" ref={ this.contentRef }>
          <h1>Home</h1>
        </div>
      </main>
    );
  }
}

export default Home;