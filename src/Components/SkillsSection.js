import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

// SVGs imported as react components
// import { ReactComponent as HTMLSVG } from '../img/HTML5_logo.svg';
// import { ReactComponent as CSSSVG } from '../img/CSS3_logo.svg';
// import { ReactComponent as SASSSVG } from '../img/Sass_logo.svg';
// import { ReactComponent as JavaScriptSVG } from '../img/Javascript_logo.svg';
// import { ReactComponent as ReactSVG } from '../img/React_logo.svg';
// import { ReactComponent as PHPSVG } from '../img/PHP_logo.svg';
// import { ReactComponent as LaravelSVG } from '../img/Laravel_logo.svg';
// import { ReactComponent as UIUXSVG } from '../img/ui-ux_logo.svg';

const SkillsSection = () => {

    useEffect(() => {
    AOS.init();
    }, []);

  return (
      <section id="skills" className="skills">
          
        <h2 className="heading">My tech stack</h2>
          
        <div className='skill__container'>
              
            <div className="skill__item">
                <div className="skill__label">HTML</div>
                
                <div className="skill__logo">
                    <img src={require("../img/HTML5_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>

            <div className="skill__item">
                <div className="skill__label">CSS</div>
                
                <div className="skill__logo">
                    <img src={require("../img/CSS3_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>

            <div className="skill__item">
                <div className="skill__label">Sass</div>
                
                <div className="skill__logo">
                    <img src={require("../img/Sass_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>

            <div className="skill__item">
                <div className="skill__label">JavaScript</div>
                
                <div className="skill__logo">
                    <img src={require("../img/JavaScript_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>

            <div className="skill__item">
                <div className="skill__label">React</div>
                
                <div className="skill__logo">
                    <img src={require("../img/React_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>

            <div className="skill__item">
                <div className="skill__label">PHP</div>
                
                <div className="skill__logo">
                    <img src={require("../img/PHP_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>

            <div className="skill__item">
                <div className="skill__label">Laravel</div>
                
                <div className="skill__logo">
                    <img src={require("../img/Laravel_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>

            <div className="skill__item">
                <div className="skill__label">MySQL</div>
                
                <div className="skill__logo">
                    <img src={require("../img/Mysql_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>
              
            <div className="skill__item">
                <div className="skill__label">Gulp.js</div>
                  
                <div className="skill__logo">
                    <img src={require("../img/Gulp_logo.png")} alt="skills-img" className="skill__logo--img" />
                </div>
            </div>
              
        </div>
          
    </section>
  )
}

export default SkillsSection