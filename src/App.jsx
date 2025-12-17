import "./scss/style.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAnimation } from "./Components/animation/useAnimation.js";

// img for timeline component
import jpPrintImage from "./img/timeline/jpprint.webp";
import parkerImage from "./img/timeline/parker.webp";
import almaImage from "./img/timeline/alma.webp";
import devImage from "./img/timeline/timelineDev.webp";

// sections for Rendering
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ProcessSection from "./Components/ProcessSection";
import Timeline from "./Components/Timeline.tsx";
import AboutSection from "./Components/AboutSection";
import SocialSection from "./Components/SocialSection";
import SkillsReel from "./Components/SkillsReel";
import PortfolioReel from "./Components/PortfolioReel";

// data for timeline component
const timelineData = {
	yearAligning: "top",
	sections: [
		{
			blocks: [
				{
					year: "until 2018",
					title: "Graphic Design & Signmaking",
					text: "Led the Signmaking & Graphic Design Department at J&P Print. Created branding, logotypes, and web wireframes for entrepreneurs and agencies, while also managing IT infrastructure and training new employees.",
					classes: "",
				},
				{
					image: jpPrintImage,
				},
			],
		},
		{
			blocks: [
				{
					image: parkerImage,
				},
				{
					year: "2018-2021",
					title: "IT Specialist / Sysadmin",
					text: "Provided IT services for international clients at Parker Hannifin and others. Administered servers and networks, managed backups (VEEAM, Veritas), deployed systems via Active Directory & SCCM, and collaborated on large-scale IT upgrades.",
					classes: "",
				},
			],
		},
		{
			blocks: [
				{
					year: "2022-2025",
					title: "Frontend Developer",
					text: "Developed and optimized career websites at Alma Career Czechia. Modernized legacy platforms, improved accessibility and performance, applied UX/UI best practices, and delivered mobile-first solutions.",
					classes: "",
				},
				{
					image: almaImage,
				},
			],
		},
		{
			blocks: [
				{
					image: devImage,
				},
				{
					year: "2026-future",
					title: "Your Company",
					text: "Bringing my combined experience in design, IT, and development to new challenges. The next step could be working with your company on exciting projects.",
					classes: "",
				},
			],
		},
	],
};

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	useAnimation(0);

	return (
		<div className="portfolio-app">
			<Navigation />

			<Hero
				title="DEV"
				subtitle="for hire"
				promo="Hello, I’m Lucian Nguyen, a web developer passionate about creating clean, user-friendly, and scalable digital solutions. I’d be excited to bring both technical skills and a collaborative mindset to your project."
			/>

			<AboutSection />

			<ProcessSection />

			<Timeline data={timelineData} />

			<SkillsReel />

			<SocialSection />

			<PortfolioReel />
			<Footer />
		</div>
	);
}

export default App;
