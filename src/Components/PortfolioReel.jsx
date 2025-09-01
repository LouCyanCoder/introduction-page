import React, { useEffect } from "react";
import laraGigsView from "../img/projects/laravel-jobs.jpg";
import hipsterCoffeeView from "../img/projects/generic-hipster-coffee.jpg";
import whoCaresView from "../img/projects/who-cares.jpg";

const PortfolioReel = () => {
	useEffect(() => {
		const panels = document.querySelectorAll(".panel");

		panels.forEach((panel) => {
			panel.addEventListener("click", () => {
				removeActiveClasses();
				panel.classList.add("active");
				console.log("changed focus");
			});
		});

		const removeActiveClasses = () => {
			panels.forEach((panel) => {
				panel.classList.remove("active");
			});
		};
	}, []);

	return (
		<section className="portfolio" id="portfolio">
			<h2 className="heading">
				Some fun projects <br /> i did
			</h2>
			<div className="portfolio-container">
				<article
					className="panel active"
					style={{
						backgroundImage: `url(${whoCaresView})`,
					}}
				>
					<div className="panel-description">
						<h3>Who cares?</h3>
						<p>
							A philantropist portal, a charity posting site. Using leaflet for
							map component. Dedicated to ukrainian refugees.
						</p>
						<span>
							<strong>Tech stack:</strong>
							<p>Laravel, MySQL, React</p>
						</span>
						<div className="panel-description_buttons">
							<a
								href="https://whocares.codeboot.cz/"
								className="button-site"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa-solid fa-window-restore mx-1"></i>
								Visit site
							</a>
							<a
								href="https://github.com/LouCyanCoder/laravel-final-project"
								className="button-github"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa-brands fa-github mx-1"></i>
								Github
							</a>
						</div>
					</div>
				</article>
				<article
					className="panel"
					style={{
						backgroundImage: `url(${hipsterCoffeeView})`,
					}}
				>
					<div className="panel-description">
						<h3>Generic Hipster coffee</h3>
						<p>
							Website for a coffee shop. Student Project for the Coding Bootcamp
							Praha. Coded based on provided psd design.
						</p>
						<span>
							<strong>Tech stack:</strong>
							<p>HTML, SCSS, Bootstrap</p>
						</span>
						<div className="panel-description_buttons">
							<a
								href="https://loucyancoder.github.io/hipster-coffee-deployment/"
								className="button-site"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa-solid fa-window-restore mx-1"></i>
								Visit site
							</a>
							<a
								href="https://github.com/LouCyanCoder/generic-hipster-coffee"
								className="button-github"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa-brands fa-github mx-1"></i>
								Github
							</a>
						</div>
					</div>
				</article>
				<article
					className="panel"
					style={{
						backgroundImage: `url(${laraGigsView})`,
					}}
				>
					<div className="panel-description">
						<h3>LaraGigs</h3>
						<p>
							Job posting site with option to post a job listing after
							registration, and search bar. Tailwind CSS theme provided by
							Traversy Media.
						</p>
						<span>
							<strong>Tech stack:</strong>
							<p>Laravel, MySQL, Tailwind CSS</p>
						</span>
						<div className="panel-description_buttons">
							<a
								href="https://laravel-jobs.herokuapp.com/"
								className="button-site"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa-solid fa-window-restore mx-1"></i>
								Visit site
							</a>
							<a
								href="https://github.com/LouCyanCoder/Laravel-jobs"
								className="button-github"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fa-brands fa-github mx-1"></i>
								Github
							</a>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default PortfolioReel;
