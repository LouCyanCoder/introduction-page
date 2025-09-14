import React, { useState } from "react";
// importing Slider component from react slick
import Slider from "react-slick";
// importing images for the reel
import HTMLlogo from "../img/skills/HTML5_logo.png";
import CSSlogo from "../img/skills/CSS3_logo.png";
import JSlogo from "../img/skills/JavaScript_logo.png";
import Sasslogo from "../img/skills/Sass_logo.png";
import Laravellogo from "../img/skills/Laravel_logo.png";
import Reactlogo from "../img/skills/React_logo.png";
import MySQLlogo from "../img/skills/Mysql_logo.png";
import Gitlogo from "../img/skills/Git_logo.png";
import PHPlogo from "../img/skills/PHP_logo.png";
// arrows for the reel
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// setting up images in an array
const skills = [
	{ image: HTMLlogo, text: "HTML5" },
	{ image: CSSlogo, text: "CSS3" },
	{ image: JSlogo, text: "JavaScript" },
	{ image: Sasslogo, text: "Sass" },
	{ image: Laravellogo, text: "Laravel" },
	{ image: Reactlogo, text: "React" },
	{ image: MySQLlogo, text: "MySQL" },
	{ image: Gitlogo, text: "Git" },
	{ image: PHPlogo, text: "PHP" },
];

// arrows for the reel
const NextArrow = ({ onClick }) => {
	return (
		<div className="arrow next" onClick={onClick}>
			<FaArrowRight />
		</div>
	);
};

const PrevArrow = ({ onClick }) => {
	return (
		<div className="arrow prev" onClick={onClick}>
			<FaArrowLeft />
		</div>
	);
};

const SkillsReel = () => {
	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		infinite: true,
		lazyLoad: true,
		slidesToShow: 5,
		centerMode: true,
		centerPadding: 2,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		autoplay: false,
		autoplaySpeed: 2000,
		speed: 500,

		beforeChange: (current, next) => setImageIndex(next),
	};

	return (
		<div className="SkillsReel" id="skillsReel">
			<h2 className="heading">My tech stack</h2>
			<Slider {...settings}>
				{skills.map((skill, idx) => (
					<div
						className={idx === imageIndex ? "skill slide activeSlide" : "slide"}
						key={idx}
					>
						<img src={skill.image} alt={skill.text} />
						<p className="skill__label text-center">{skill.text}</p>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SkillsReel;
