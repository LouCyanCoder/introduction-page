import React from "react";

const Hero = ({ title = "", subtitle = "", promo = "", className = "" }) => (
	<section aria-label={title} className={`hero${className}`}>
		<div className="container hero__wrap is-relative">
			<div id="js-hero-content">
				<h1
					className="hero__title"
					data-animation="fade"
					data-animation-duration="3000"
					data-animation-delay="900"
				>
					{title}
					<br />
					<span className="hero__subtitle">{subtitle}</span>
				</h1>
				{promo && (
					<p
						className="hero__promo"
						data-animation="fade"
						data-animation-duration="3000"
						data-animation-delay="2000"
					>
						{promo}
					</p>
				)}
			</div>
		</div>
	</section>
);

export default Hero;
