import React from "react";

const Hero = ({ title = "", promo = "", className = "" }) => (
	<section aria-label={title} className={`hero${className}`}>
		<div className="container hero__wrap is-relative">
	
			<div id="js-hero-content">
				<h1 className="hero__title">{title}</h1>
				{promo && <p className="hero__promo">{promo}</p>}
			</div>
		</div>
	</section>
);

export default Hero;
