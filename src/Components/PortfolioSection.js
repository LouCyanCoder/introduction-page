import React from "react";

const PortfolioSection = () => {
	return (
		<section id="portfolio" className="portfolio">
			<h2 className="heading">My portfolio</h2>

			<div className="grid-container">
				<article className="card text-center col">
					{/* <img
						src={require("../img/placeholder.png")}
						alt="project-image"
						className="portfolio__img"
					/> */}
					<div className="card-body">
						<h5 className="card-title">Generic Hipster café</h5>
						<p className="card-text">
							Website for a coffee shop. Student Project for the Coding Bootcamp
							Praha. Coded based on provided psd design.
						</p>
						<p>
							<strong>Tech stack:</strong> HTML, CSS, Sass, Bootstrap
						</p>
						<a href="#" className="btn btn-primary">
							Visit site
						</a>
					</div>
				</article>
				<article className="card text-center col">
					<img
						src={require("../img/projects/laravel-jobs.png")}
						alt="project-image"
						className="portfolio__img"
					/>
					<div className="card-body">
						<h5 className="card-title">Laravel Jobs</h5>
						<p className="card-text">
							Job posting site with option to post a job listing after
							registration, and search bar.
						</p>
						<p>
							<strong>Tech stack:</strong> Laravel, HTML, Tailwind CSS
						</p>
						<a
							href="https://laravel-jobs.herokuapp.com/"
							className="btn btn-primary"
						>
							Visit site
						</a>
						<a
							href="https://github.com/LouCyanCoder/Laravel-jobs"
							className="btn btn-warning m-2"
						>
							Github
						</a>
					</div>
				</article>
				<article className="card text-center col">
					{/* <img
						src={require("../img/placeholder.png")}
						alt="project-image"
						className="portfolio__img"
					/> */}
					<div className="card-body">
						<h5 className="card-title">Generic Hipster café</h5>
						<p className="card-text">
							Website for a coffee shop. Student Project for the Coding Bootcamp
							Praha. Coded based on provided psd design.
						</p>
						<p>
							<strong>Tech stack:</strong> HTML, CSS, Sass, Bootstrap
						</p>
						<a href="#" className="btn btn-primary">
							Visit site
						</a>
					</div>
				</article>
				=
			</div>
		</section>
	);
};

export default PortfolioSection;
