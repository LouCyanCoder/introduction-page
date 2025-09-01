import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// SVGs imported as react components

const SkillsSection = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section id="skills" className="skills">
			<h2 className="heading">My tech stack</h2>

			<div className="skill__container">
				<div className="skill__item">
					<div className="skill__label">HTML</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/HTML5_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>

				<div className="skill__item">
					<div className="skill__label">CSS</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/CSS3_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>

				<div className="skill__item">
					<div className="skill__label">JavaScript</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/JavaScript_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>

				<div className="skill__item">
					<div className="skill__label">React</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/React_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>

				<div className="skill__item">
					<div className="skill__label">PHP</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/PHP_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>

				<div className="skill__item">
					<div className="skill__label">Laravel</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/Laravel_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>

				<div className="skill__item">
					<div className="skill__label">Sass</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/Sass_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>

				<div className="skill__item">
					<div className="skill__label">MySQL</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/Mysql_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>

				<div className="skill__item">
					<div className="skill__label">Git</div>

					<div className="skill__logo">
						<img
							src={require("../img/skills/Git_logo.png")}
							alt="skills-img"
							className="skill__logo--img"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
