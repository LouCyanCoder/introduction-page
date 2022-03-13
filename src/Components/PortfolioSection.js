import React from 'react'

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
        <h2 className="heading">My portfolio</h2>

        <div className="portfolio__container">
            <div className="portfolio__item">
                <img src={require("../img/placeholder.png")} alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Website for a coffee shop. Student Project for the Coding Bootcamp Praha. Coded based on provided
                        psd design.</p>
                    <p className="portfolio__desc">Tech stack: HTML, CSS, Sass, Bootstrap</p>
                </div>
            </div>

            <div className="portfolio__item">
                <img src={require("../img/placeholder.png")} alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #2. Description of hackathon project #2. Description of
                        hackathon project #2.</p>
                    <p className="portfolio__desc">Tech stack:</p>
                </div>
            </div>

            <div className="portfolio__item">
                <img src={require("../img/placeholder.png")} alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #3. Description of hackathon project #3. Description of
                        hackathon project #3.</p>
                    <p className="portfolio__desc">Tech stack:</p>
                </div>
            </div>

            <div className="portfolio__item">
                <img src={require("../img/placeholder.png")} alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #4. Description of hackathon project #4. Description of
                        hackathon project #4.</p>
                    <p className="portfolio__desc">Tech stack:</p>
                </div>
            </div>

            <div className="portfolio__item">
                <img src={require("../img/placeholder.png")} alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #5. Description of hackathon project #5. Description of
                        hackathon project #5.</p>
                    <p className="portfolio__desc">Tech stack:</p>
                </div>
            </div>

            <div className="portfolio__item portfolio__item--highlight">
                <img src={require("../img/placeholder.png")} alt="project-image" className="portfolio__img" />
                <div className="portfolio__desc">
                    <p>Description of hackathon project #5. Description of hackathon project #5. Description of
                        hackathon project #5.</p>
                    <a href="#" target="_blank" className="button">Explore</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PortfolioSection