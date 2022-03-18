import React from 'react'

import { ReactComponent as HTMLSVG } from '../img/HTML5_logo.svg';
import { ReactComponent as CSSSVG } from '../img/CSS3_logo.svg';
import { ReactComponent as SASSSVG } from '../img/Sass_logo.svg';
import { ReactComponent as JavaScriptSVG } from '../img/Javascript_logo.svg';
import { ReactComponent as ReactSVG } from '../img/React_logo.svg';
import { ReactComponent as PHPSVG } from '../img/PHP_logo.svg';
import { ReactComponent as LaravelSVG } from '../img/Laravel_logo.svg';
import { ReactComponent as UIUXSVG } from '../img/ui-ux_logo.svg';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills">
        <h2 className="heading">My tech stack</h2>

        <div className="skill__item">
            <div className="skill__label">HTML</div>
            <div className="skill__progress-logo">
                <HTMLSVG />
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">CSS</div>
            <div className="skill__progress-logo">
                <CSSSVG />
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">Sass</div>
            <div className="skill__progress-logo">
                <SASSSVG />
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">JavaScript</div>
            <div className="skill__progress-logo">
                <JavaScriptSVG />
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">React</div>
            <div className="skill__progress-logo">
                <ReactSVG />
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">PHP</div>
            <div className="skill__progress-logo">
                <PHPSVG />
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">Laravel</div>
            <div className="skill__progress-logo">
                <LaravelSVG />
            </div>
        </div>

        <div className="skill__item">
            <div className="skill__label">UI/UX Design</div>
            <div className="skill__progress-logo">
                <UIUXSVG />
            </div>
        </div>
    </section>
  )
}

export default SkillsSection