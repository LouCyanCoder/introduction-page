import React from 'react'

const ProcessSection = () => {
  return (
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
  )
}

export default ProcessSection