import React from 'react'

// SVGs imported into the components
import { ReactComponent as GitHubSVG } from '../img/github.svg';
import { ReactComponent as LinkedinSVG } from '../img/linkedin.svg';
import { ReactComponent as CodepenSVG } from '../img/codepen.svg';


const Footer = () => {
  return (
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
                <CodepenSVG />
            </a>
        </div>

        <p className="footer__copy">Copyright &copy; Lou Cyan Designs 2022</p>
    </footer>
  )
}

export default Footer