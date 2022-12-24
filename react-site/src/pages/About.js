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
				<div className="about-container">
				<Sidebar />
					<h1 className="about-title">About</h1>
					<div className="about-content">
						<p className="about-text">
							I am a software developer with a passion for creating and designing
							applications. I am currently a student at San Francisco State University
							pursuing a Bachelor's degree in Computer Science. I am also currently
							working as a mentor/coding coach at thecoderschool.com.
						</p>
						<p className="about-text">
							I am a self-motivated individual who is able to work independently. 
							I have experience with a variety of programming languages
							and frameworks, including Java, C++, Python, JavaScript, React,
							Node.js, and more. I am also experienced with web development,
							including HTML, CSS.
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

