import React, { useState } from 'react';
// importing Slider component from react slick
import Slider from 'react-slick';
// importing images for the reel
import HTMLlogo from '../img/skills/HTML5_logo.png';
import CSSlogo from '../img/skills/CSS3_logo.png';
import JSlogo from '../img/skills/JavaScript_logo.png';
import Sasslogo from '../img/skills/Sass_logo.png';
import Laravellogo from '../img/skills/Laravel_logo.png';
import Reactlogo from '../img/skills/React_logo.png';
import MySQLlogo from '../img/skills/Mysql_logo.png';
import Gitlogo from '../img/skills/Git_logo.png';
import PHPlogo from '../img/skills/PHP_logo.png';
// arrows for the reel
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// setting up images in an array
const images = [HTMLlogo, CSSlogo, JSlogo, Sasslogo, Laravellogo, Reactlogo, MySQLlogo, Gitlogo, PHPlogo];


// arrows for the reel
const NextArrow = ({ onClick }) => {
    return (
        <div className='arrow next' onClick={onClick}>
            <FaArrowRight />
        </div>
    )
}

const PrevArrow = ({ onClick }) => {
    return (
        <div className='arrow prev' onClick={onClick}>
            <FaArrowLeft />
        </div>
    )
}


const SkillsReel = () => {
    
    // useState to set the image index
    const [imageIndex, setImageIndex] = useState(0);
    
    // slider settings needs to be put in an object
    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      
        centerPadding: "90px",
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2000,
       
       
        beforeChange: (current, next) => setImageIndex(next)
    };

  return (
      <div className='SkillsReel' id='skillsReel'>
          <h2 className="heading">My tech stack</h2>
          <Slider {...settings}>
              {images.map((img, idx) => (
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <img src={img} alt={img} />      
                </div>
            ))}

          </Slider>


    </div>
  )
}

export default SkillsReel;

