import React from "react";

const Hero = () => {
	return (
		<div id="hero" className="hero">
			<h1 className="hero__title">
				Hello, I am <br />
				<a href="#about" className="hero__link">
					Lucian Nguyen
				</a>
			</h1>
			<h2 className="hero__desc">I'm a Web Developer.</h2>
			<h5>Would you like to see my work?</h5>
		</div>
	);
};

export default Hero;
