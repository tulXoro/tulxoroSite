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
							Hello! My name is Tim Lor, and I am a student studying Computer Science. I work part-time as a Mentor/Coach for
							children ages 6-18 <a href="www.thecoderschool.com" target="__blank">theCoderSchool</a>.
						</p>
						<p className="about-text">
							I love programming, and I am always looking for new opportunities to sharpen my skills.
							Currently, I am familiar with the following languages and frameworks: Java, JavaScript, Python,
							C++, ReactJS, ExpressJS, and NodeJS.
						</p>
					</div>
				</div>
			</main>
		);
	}
}

export default About;

