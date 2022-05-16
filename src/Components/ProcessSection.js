import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProcessSection = () => {

    useEffect(() => {
    AOS.init();
    }, []);
    
  return (
      <section className="process">
          
          <p className="process__quote" data-aos="fade-up">
            Let's work together to make <strong>your product stand out</strong>. I create
            beautiful and functional websites.<br />I work with my clients step by step <strong>from the idea stage to
            the fully functioning web application</strong>.
          </p>

          <div className="process__container">
              
            <div className="process__item" data-aos="fade-up">
              <div className="process__circle">
                <i class="fa-solid fa-comments"></i>
              </div>
                <h4 className="process__title">Discover</h4>
                  <p data-aos="fade-up">
                    Tell me about your project and we brainstorm together the features to create a plan for your product
                    to launch.
                  </p>

            </div>

            <div className="process__item" data-aos="fade-up">
              <div className="process__circle">
                <i class="fa-solid fa-pen-ruler"></i>
              </div>
                <h4 className="process__title">Design</h4>
                  <p data-aos="fade-up">
                    We design the wireframe and agree together how to create the best experience for your users to
                    present your brand.
                  </p>
            </div>

            <div className="process__item" data-aos="fade-up">
              <div className="process__circle">
                <i class="fa-solid fa-code"></i>
              </div>
                <h4 className="process__title">Deploy</h4>
                  <p data-aos="fade-up">
                      We protoype and develop your product. We work together intensely to incorporate your feedback.
                  </p>

            </div>

            <div className="process__item" data-aos="fade-up">
              <div className="process__circle">
                <i class="fa-solid fa-cloud-arrow-up"></i>
              </div>
                <h4 className="process__title">Be Ready</h4>
                  <p data-aos="fade-up">
                    We deploy your product and now your website is ready to get the traction. Get out there and grow your
                    audience.
                  </p>
            </div>
        </div>
    </section>
  )
}

export default ProcessSection