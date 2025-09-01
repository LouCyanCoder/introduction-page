import React from "react";

// SVGs imported into the components
import { ReactComponent as GitHubSVG } from "../img/github.svg";
import { ReactComponent as LinkedinSVG } from "../img/linkedin.svg";

const SocialSection = () => {
	return (
		<section className="social">
			<h3 className="heading color-white">Find me here</h3>

			<div className="social__container">
				<a
					href="https://github.com/LouCyanCoder"
					target="_blank"
					rel="noreferrer"
					className="social__link github"
					data-aos="flip-up"
				>
					<GitHubSVG />
				</a>

				<a
					href="https://www.linkedin.com/in/lucian-nguyen-4aa223162/"
					target="_blank"
					rel="noreferrer"
					className="social__link linkedin"
					data-aos="flip-up"
				>
					<LinkedinSVG />
				</a>
			</div>
		</section>
	);
};

export default SocialSection;
