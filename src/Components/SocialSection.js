import React from "react";

// SVGs imported into the components
import { ReactComponent as GitHubSVG } from "../img/github.svg";
import { ReactComponent as LinkedinSVG } from "../img/linkedin.svg";
import { ReactComponent as CodepenSVG } from "../img/codepen.svg";

const SocialSection = () => {
	return (
		<section className="social">
			<h3 className="heading">Find me here</h3>

			<div className="social__container">
				<a
					href="#"
					target="_blank"
					className="social__link github"
					data-aos="flip-up"
				>
					<GitHubSVG />
				</a>

				<a
					href="https://www.linkedin.com/in/lucian-nguyen-4aa223162/"
					target="_blank"
					className="social__link linkedin"
					data-aos="flip-up"
				>
					<LinkedinSVG />
				</a>

				<a
					href="#"
					target="_blank"
					className="social__link codepen"
					data-aos="flip-up"
				>
					<CodepenSVG />
				</a>
			</div>
		</section>
	);
};

export default SocialSection;
