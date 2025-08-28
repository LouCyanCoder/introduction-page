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
import SkillsSection from "./Components/SkillsSection";
import PortfolioSection from "./Components/PortfolioSection";
import AboutSection from "./Components/AboutSection";
import SocialSection from "./Components/SocialSection";
import ContactForm from "./Components/ContactForm";
import SkillsReel from "./Components/SkillsReel";
import PortfolioReel from "./Components/PortfolioReel";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="portfolio-app">
			<Navigation />

			<Hero />

			<ProcessSection />

			<AboutSection />

			<SkillsReel />

			<SocialSection />

			{/* has been replaced by SkillsReel and PortfolioReel */}
			{/* <SkillsSection /> */}

			{/* <PortfolioSection /> */}

			<PortfolioReel />

			{/* <ContactForm /> */}

			<Footer />
		</div>
	);
}

export default App;
