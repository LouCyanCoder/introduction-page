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
			title: "Discover",
			text: "Tell me about your project and we brainstorm together the features to create a plan for your product to launch.",
		},
		{
			icon: "fa-pen-ruler",
			title: "Design",
			text: "We design the wireframe and agree together how to create the best experience for your users to present your brand.",
		},
		{
			icon: "fa-code",
			title: "Be Ready",
			text: "We protoype and develop your product. We work together intensely to incorporate your feedback.",
		},
		{
			icon: "fa-cloud-arrow-up",
			title: "Deploy",
			text: "We deploy your product and now your website is ready to get the traction. Get out there and grow your audience.",
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
			<p className="process__quote" data-aos="fade-up">
				Let's work together to make <strong>your product stand out</strong>. I
				create beautiful and functional websites.
				<br />I work with my clients step by step{" "}
				<strong>
					from the idea stage to the fully functioning web application
				</strong>
				.
			</p>

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
