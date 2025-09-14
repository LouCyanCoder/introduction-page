import React, { useEffect } from "react";
import laraGigsView from "../img/projects/laravel-jobs.jpg";
import hipsterCoffeeView from "../img/projects/generic-hipster-coffee.jpg";
import whoCaresView from "../img/projects/who-cares.jpg";
import k6View from "../img/projects/k6.jpg";
import almaView from "../img/projects/alma.jpg";

const projects = [
	{
		title: "Who cares?",
		image: whoCaresView,
		description:
			"A philantropist portal, a charity posting site. Using leaflet for map component. Dedicated to ukrainian refugees.",
		tech: "Laravel, MySQL, React",
		site: "",
		github: "https://github.com/LouCyanCoder/laravel-final-project",
		active: true,
	},
	{
		title: "Generic Hipster coffee",
		image: hipsterCoffeeView,
		description:
			"Website for a coffee shop. Student Project for the Coding Bootcamp Praha. Coded based on provided psd design.",
		tech: "HTML, SCSS, Bootstrap",
		site: "https://loucyancoder.github.io/hipster-coffee-deployment/",
		github: "https://github.com/LouCyanCoder/generic-hipster-coffee",
		active: false,
	},
	{
		title: "LaraGigs",
		image: laraGigsView,
		description:
			"Job posting site with option to post a job listing after registration, and search bar. Tailwind CSS theme provided by Traversy Media.",
		tech: "Laravel, MySQL, Tailwind CSS",
		site: "",
		github: "https://github.com/LouCyanCoder/Laravel-jobs",
		active: false,
	},
	{
		title: "K6 Komerční Areál",
		image: k6View,
		description:
			"Complete brand identity and graphical design for the business compound K6 in České Budějovice, website development by Webryba.cz",
		site: "http://www.k6areal.cz/",
		github: "",
		active: false,
	},
	{
		title: "Customer Design at Alma Career",
		image: almaView,
		description:
			"Took part in hundreds of customer specific design tweaks and implementations for career sites at Alma Career. With focus on accessibility and performance.",
		site: "https://www.almacareer.com/cz",
		github: "",
		active: false,
	},
];

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
				{projects.map((project, idx) => (
					<article
						key={project.title}
						className={`panel${project.active ? " active" : ""}`}
						style={{
							backgroundImage: `url(${project.image})`,
						}}
					>
						<div className="panel-description">
							<h3>{project.title}</h3>
							<p>{project.description}</p>

							{project.tech && (
								<span>
									<strong>Tech stack:</strong>
									<p>{project.tech}</p>
								</span>
							)}
							<div className="panel-description_buttons">
								{project.site && (
									<a
										href={project.site}
										className="button-site"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-solid fa-window-restore mx-1"></i>
										Visit site
									</a>
								)}
								{project.github && (
									<a
										href={project.github}
										className="button-github"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-brands fa-github mx-1"></i>
										Github
									</a>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default PortfolioReel;
