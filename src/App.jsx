import "./scss/style.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// SVGs imported into the components
import { ReactComponent as GitHubSVG } from "./img/github.svg";
import { ReactComponent as LinkedinSVG } from "./img/linkedin.svg";
import { ReactComponent as InstagramSVG } from "./img/instagram.svg";

// importing separate sections for Rendering
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ProcessSection from "./Components/ProcessSection";
import Timeline from "./Components/Timeline";
import SkillsSection from "./Components/SkillsSection";
import PortfolioSection from "./Components/PortfolioSection";
import AboutSection from "./Components/AboutSection";
import SocialSection from "./Components/SocialSection";
import ContactForm from "./Components/ContactForm";
import SkillsReel from "./Components/SkillsReel";
import PortfolioReel from "./Components/PortfolioReel";

// data for timeline component

const timelineData = {
	yearAligning: "top",
	sections: [
		{
			blocks: [
				{
					year: "-2018",
					title: "Graphic Design & Signmaking",
					text: "Led the Signmaking & Graphic Design Department at J&P Print. Created branding, logotypes, and web wireframes for entrepreneurs and agencies, while also managing IT infrastructure and training new employees.",
					classes: "",
				},
				{
					title: "Přelet přes alpy v autě.",
					text: "Tesly by mohly mít větší kufr.",
					classes: "",
				},
			],
		},
		{
			blocks: [
				{
					title: "Výstavba servisních míst Tesla okolo měsíce",
					text: "Čekací doba na převaděč spojitosti je nekonečná.",
					classes: "",
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
					title: "Výstavba servisních míst Tesla okolo měsíce",
					text: "Čekací doba na převaděč spojitosti je nekonečná.",
					classes: "",
				},
			],
		},
		{
			blocks: [
				{
					title: "Výstavba servisních míst Tesla okolo měsíce",
					text: "Čekací doba na převaděč spojitosti je nekonečná.",
					classes: "",
				},
				{
					year: "2025-?",
					title: "Your Project",
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

	return (
		<div className="portfolio-app">
			<Navigation />

			<Hero
				title="DEV for hire"
				promo="This is a simple React webpage that i use for testing and introduce myself."
			/>

			<AboutSection />

			<ProcessSection />

			<Timeline data={timelineData} />

			<SkillsReel />

			<SocialSection />

			{/* has been replaced by SkillsReel and PortfolioReel */}
			{/* <SkillsSection /> */}

			{/* <PortfolioSection /> */}

			<PortfolioReel />

			<ContactForm />

			<Footer />
		</div>
	);
}

export default App;
