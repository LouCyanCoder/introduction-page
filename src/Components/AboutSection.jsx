import React from "react";

const AboutSection = () => {
	return (
		<section id="about" className="about">
			<h2 className="heading" data-aos="fade-up">
				About me
			</h2>

			<div className="about__desc" data-aos="fade-left">
				<p>
					My name is <strong>Lucian Nguyen. </strong>
					Frontend developer with a background in IT and graphic design I’ve
					spent the past three years working at Alma Career, building and
					improving digital products, and before that I spent several years in
					IT and design. I’m now looking for new opportunities where I can focus
					on frontend development and continue growing toward fullstack. I enjoy
					creating clean, responsive interfaces that make the web easier and
					more enjoyable to use.
				</p>
				<h4 className="about__cta">
					Get in touch and let's do something great together.
				</h4>
			</div>
		</section>
	);
};

export default AboutSection;
