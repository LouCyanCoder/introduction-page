import React from "react";

const Hero = ({ title = "", promo = "", className = "" }) => (
	<section aria-label={title} className={`hero${className}`}>
		<div className="container hero__wrap is-relative">
			<img
				src={require("../img/hero/hero-dev.webp")}
				alt="This is me, and I might find myself in your project"
				className="hero__img"
			/>
			<div id="js-hero-content">
				<h1 className="hero__title">{title}</h1>
				{promo && <p className="hero__promo">{promo}</p>}
			</div>
		</div>
	</section>
);

export default Hero;
