import React from 'react'

const SkillsSection = () => {
  return (
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
  )
}

export default SkillsSection