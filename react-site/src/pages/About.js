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
				<div className="about-container">
					<h1 className="about-title">About</h1>
					<div className="about-content">
						<p className="about-text">
							I am a software developer with a passion for creating and designing
							applications. I am currently a student at the University of
							California, Irvine, pursuing a B.S. in Computer Science. I am
							currently looking for a full-time software engineering position
							starting in Summer 2021.
						</p>
						<p className="about-text">
							I am a self-taught developer who has been programming for over 5
							years. I have experience with a variety of programming languages
							and frameworks, including Java, C++, Python, JavaScript, React,
							Node.js, and more. I am also experienced with web development,
							including HTML, CSS, and Bootstrap.
						</p>
						<p className="about-text">
							I am a hard-working individual who is passionate about creating
							applications that are both functional and aesthetically pleasing.
							I am also a team player who is able to work well with others and
							communicate effectively.
						</p>
					</div>
				</div>
			</main>
		);
	}
}

export default About;

