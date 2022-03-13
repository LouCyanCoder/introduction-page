import logo from './logo.svg';
import './scss/style.scss';

// SVGs imported into the components
import {ReactComponent as GitHubSVG} from './img/github.svg';
import {ReactComponent as LinkedinSVG} from './img/linkedin.svg';
import { ReactComponent as InstagramSVG } from './img/instagram.svg';

// importing separate sections for Rendering
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProcessSection from './Components/ProcessSection';
import SkillsSection from './Components/SkillsSection';
import PortfolioSection from './Components/PortfolioSection';
import AboutSection from './Components/AboutSection';
import SocialSection from './Components/SocialSection';
import ContactForm from './Components/ContactForm';




function App() {


  return (
    <div className="portfolio-app">

        <Navigation />

        <Header />

        <ProcessSection />

        <SkillsSection />

        <PortfolioSection />

        <SocialSection />
          
        <AboutSection />

        <ContactForm />

        <Footer />



    </div>
  );
}

export default App;
