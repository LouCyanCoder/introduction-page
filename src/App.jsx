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
					year: "2027",
					title: "Tesla létá",
					text: "Už taky bylo načase, že jo.",
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
					// or import at top
				},
				{
					year: "2028",
					title: "Tesla měla nehodu, ale pasažér to nezjistil, spal",
					text: "Tesla je tak pohodlná, že jsem se o nehodě dozvěděl až když mě probudil budík.",
					classes: "",
				},
			],
		},
		{
			blocks: [
				{
					year: "2035",
					title: "Létáme s Teslou po sluneční soustavě",
					text: "Elon už je starý, ale jeho Tesla stále frčí.",
					classes: "",
				},
				{
					title: "Výstavba servisních míst Tesla okolo měsíce",
					text: "Čekací doba na převaděč spojitosti je nekonečná.",
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
