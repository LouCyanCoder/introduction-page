import logo from './logo.svg';
import './scss/style.scss';

import {ReactComponent as GitHubSVG} from './img/github.svg';
import {ReactComponent as LinkedinSVG} from './img/linkedin.svg';
import {ReactComponent as InstagramSVG} from './img/instagram.svg';



function App() {


  return (
    <div className="portfolio-app">
    <nav className="nav">
        <img src="img/lcd-logo.png" alt="Logo" className="nav__logo"/>
        <ul className="nav__container">
            <li><a href="#header" className="nav__link">Home</a></li>
            <li><a href="#skills" className="nav__link">Skills</a></li>
            <li><a href="#portfolio" className="nav__link">Portfolio</a></li>
            <li><a href="#about" className="nav__link">About me</a></li>
            <li><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
    </nav>

    <header id="header" className="header">
        <h1 className="header__title">Hello, I am <a href="#about" className="header__link">Lucian Nguyen</a>.</h1>
        <h2 className="header__desc">I'm an aspiring Full-stack Web Developer.</h2>
    </header>

    <section className="process">
        <p className="process__quote">Let's work together to make <strong>your product stand out</strong>. I create
            beautiful and functional websites.<br />I work with my clients step by step <strong>from the idea stage to
                the fully functioning web application</strong>.</p>

        <div className="process__container">
            <div className="process__item">
                <div className="process__circle"></div>
                <h4 className="process__title">Discover</h4>
                <p>Tell me about your project and we brainstorm together the features to create a plan for your product
                    to launch.</p>
            </div>

            <div className="process__item">
                <div className="process__circle"></div>
                <h4 className="process__title">Design</h4>
                <p>We design the wireframe and agree together how to create the best experience for your users to
                    present your brand.</p>
            </div>

            <div className="process__item">
                <div className="process__circle"></div>
                <h4 className="process__title">Deploy</h4>
                <p>We protoype and develop your product. We work together intensely to incorporate your feedback.</p>
            </div>

            <div className="process__item">
                <div className="process__circle"></div>
                <h4 className="process__title">Be Ready</h4>
                <p>We deploy your product and now your website is ready to get the traction. Get out there and grow your
                    audience.</p>
            </div>
        </div>
    </section>

    <section id="skills" className="skills">
        <h2 className="heading">My skills</h2>

        <div className="skill__item">
            <div className="skill__label">HTML</div>
            <div className="skill__progress-bar">
                <div className="skill__progress skill__progress--70"></div>
                <div>70%</div>
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">CSS, Sass</div>
            <div className="skill__progress-bar">
                <div className="skill__progress skill__progress--60"></div>
                <div>60%</div>
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">JavaScript</div>
            <div className="skill__progress-bar">
                <div className="skill__progress skill__progress--30"></div>
                <div>30%</div>
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">React</div>
            <div className="skill__progress-bar">
                <div className="skill__progress skill__progress--40"></div>
                <div>40%</div>
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">jQuery</div>
            <div className="skill__progress-bar">
                <div className="skill__progress skill__progress--0"></div>
                <div>0%</div>
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">PHP</div>
            <div className="skill__progress-bar">
                <div className="skill__progress skill__progress--50"></div>
                <div>50%</div>
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">Laravel</div>
            <div className="skill__progress-bar">
                <div className="skill__progress skill__progress--50"></div>
                <div>50%</div>
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">UX</div>
            <div className="skill__progress-bar">
                <div className="skill__progress skill__progress--30"></div>
                <div>30%</div>
            </div>
        </div>
    </section>

    <section id="portfolio" className="portfolio">
        <h2 className="heading">My portfolio</h2>

        <div className="portfolio__container">
            <div className="portfolio__item">
                <img src="img/placeholder.png" alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Website for a coffee shop. Student Project for the Coding Bootcamp Praha. Coded based on provided
                        psd design.</p>
                    <p className="portfolio__desc">Tech stack: HTML, CSS, Sass, Bootstrap</p>
                </div>
            </div>

            <div className="portfolio__item">
                <img src="img/placeholder.png" alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #2. Description of hackathon project #2. Description of
                        hackathon project #2.</p>
                    <p className="portfolio__desc">Tech stack:</p>
                </div>
            </div>

            <div className="portfolio__item">
                <img src="img/placeholder.png" alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #3. Description of hackathon project #3. Description of
                        hackathon project #3.</p>
                    <p className="portfolio__desc">Tech stack:</p>
                </div>
            </div>

            <div className="portfolio__item">
                <img src="img/placeholder.png" alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #4. Description of hackathon project #4. Description of
                        hackathon project #4.</p>
                    <p className="portfolio__desc">Tech stack:</p>
                </div>
            </div>

            <div className="portfolio__item">
                <img src="img/placeholder.png" alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #5. Description of hackathon project #5. Description of
                        hackathon project #5.</p>
                    <p className="portfolio__desc">Tech stack:</p>
                </div>
            </div>

            <div className="portfolio__item portfolio__item--highlight">
                <img src="img/placeholder.png" alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #5. Description of hackathon project #5. Description of
                        hackathon project #5.</p>
                    <a href="#" target="_blank" className="button">Explore</a>
                </div>
            </div>
        </div>
    </section>

    <section id="about" className="about">
        <h2 className="heading">About me</h2>
        <img src="img/profile-photo.jpg" alt="about-image" className="about__img" />
        <div className="about__desc">
            <p><strong>My name is Lucian Nguyen.</strong> I am an aspiring full-stack web developer and enjoy learning
                new trends. <strong>I have a background in marketing/polygraphy and IT support.</strong> </p>
            <p> During my time in marketing/polygraphy I have helped to establish over 200 new companies mostly for the
                vietnamese community in Czech Republic.</p>
            <p>I am open to learning new technologies and enjoy working with people
                <span className="about__underline">who are as passionate about all web-related as me</span>.
            </p>
            <p>I have worked for clients all across the world but currently I am based in Prague, Czech Republic.</p>
            <p>I like animals, gaming, fitness and martial arts. If I do not develop, you can also find me dabbling in
                music with my crew in České Budějovice.</p>
            <h4 className="about__cta">Get in touch and let's do something great together.</h4>
            <a href="#contact" className="button">Contact me</a>
        </div>
    </section>

    <section className="social">
        <h3 className="heading">Find me here</h3>

        <div className="social__container">
            <a href="#" target="_blank" className="social__link github">
                <GitHubSVG />
            </a>

            <a href="https://www.linkedin.com/in/lucian-nguyen-4aa223162/" target="_blank" className="social__link linkedin">
                <LinkedinSVG />
            </a>

            <a href="#" target="_blank" className="social__link instagram">
                <InstagramSVG />
            </a>
        </div>
    </section>

    <section id="contact" className="contact">
        <h2 className="heading">Contact me</h2>

        <form className="form">
            <input type="text" name="first-name" placeholder="First Name *" className="form__input" />
            <input type="text" name="last-name" placeholder="Last Name *" className="form__input" />
            <input type="email" name="email" placeholder="Email *" className="form__input" />
            <input type="text" name="phone" placeholder="Phone" className="form__input" />
            <label className="form-label">My message *</label>
            <textarea rows="6" className="form__textarea"></textarea>
            <button className="form__button">Send my message</button>
        </form>
    </section>

    <footer className="footer">
        <h3 className="heading">
            <div className="footer__line"></div>Nice to meet you!<div className="footer__line"></div>
        </h3>

        <div className="social__container">
            <a href="#" target="_blank" className="social__link github">
                <GitHubSVG />
            </a>

            <a href="https://www.linkedin.com/in/lucian-nguyen-4aa223162/" target="_blank" className="social__link linkedin">
                <LinkedinSVG />
            </a>

            <a href="#" target="_blank" className="social__link instagram">
                <InstagramSVG />
            </a>
        </div>

        <p className="footer__copy">Copyright &copy; Lou Cyan Designs 2022</p>
    </footer>

    </div>
  );
}

export default App;
