import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProcessSection = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	const processSteps = [
		{
			icon: "fa-comments",
			title: "Polyglotic & Globally minded",
			text: "Fluent in Czech and English, proficient in other languages, and quick to acquire conversational basics when needed. The bigger the cultural melting pot, the better.",
		},
		{
			icon: "fa-pen-ruler",
			title: "Analytical & Adaptive",
			text: "Skilled at breaking down complex problems and adjusting quickly to new challenges, technologies, and environments.",
		},
		{
			icon: "fa-lightbulb",
			title: "Unique perspective",
			text: "My ability to think differently helps me generate original solutions and adapt ideas in unexpected ways",
		},
		{
			icon: "fa-hand-fist",
			title: "Balanced Resilience",
			text: "Easy to work with under normal circumstances, but able to bring focus, determination, and grit in high-pressure situations.",
		},
	];

	const ProcessItem = ({ icon, title, text }) => (
		<div className="process__item" data-aos="fade-up">
			<div className="process__circle">
				<i className={`fa-solid ${icon}`}></i>
			</div>
			<h4 className="process__title">{title}</h4>
			<p data-aos="fade-up">{text}</p>
		</div>
	);

	return (
		<section className="process">
			<div className="container">
				<p className="process__quote" data-aos="fade-up">
					My path as a web developer has been guided not only by experience and
					research, but also by talent testing and personal growth, leading me
					to four core strengths I bring to my work.
				</p>
			</div>

			<div className="process__container">
				{processSteps.map((step, idx) => (
					<ProcessItem
						key={idx}
						icon={step.icon}
						title={step.title}
						text={step.text}
					/>
				))}
			</div>
		</section>
	);
};

export default ProcessSection;
