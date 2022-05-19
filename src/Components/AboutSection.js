import React from "react";

const AboutSection = () => {
	return (
		<section id="about" className="about">
			<h2 className="heading" data-aos="fade-up">
				About me
			</h2>
			<img
				src={require("../img/profile-photo.jpg")}
				alt="about-image"
				className="about__img"
				data-aos="fade-right"
			/>
			<div className="about__desc" data-aos="fade-left">
				<p>
					<strong>My name is Lucian Nguyen</strong> I am web developer and enjoy
					learning new trends.{" "}
					<strong>I have a background in graphic design and IT support.</strong>{" "}
				</p>
				<p>
					{" "}
					During my time in graphic design I have helped to establish over
					numerous new companies or improve their existing ones in Czech
					Republic.
				</p>
				<p>
					I am open to learning new technologies and enjoy working with people
					<span className="about__underline">
						{" "}
						who are as passionate about all web-related as me
					</span>
					.
				</p>
				<p>
					I have worked for clients all across the world but currently I am
					based in Prague, Czech Republic.
				</p>
				<p>
					I like animals, gaming, fitness and martial arts. If I do not develop,
					you can also find me dabbling in music with my crew in České
					Budějovice.
				</p>
				<h4 className="about__cta">
					Get in touch and let's do something great together.
				</h4>

				<a href="#contact">
					<button className="btn btn-warning m-auto">Contact me</button>
				</a>
			</div>
		</section>
	);
};

export default AboutSection;
