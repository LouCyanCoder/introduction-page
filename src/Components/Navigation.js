import React from 'react'

const Navigation = () => {
  return (
    <nav className="nav">
        <img src={require("../img/lcd-logo.jpg")} alt="Logo" className="nav__logo"/>
        <ul className="nav__container">
            <li><a href="#header" className="nav__link">Home</a></li>
            <li><a href="#skills" className="nav__link">Skills</a></li>
            <li><a href="#portfolio" className="nav__link">Portfolio</a></li>
            <li><a href="#about" className="nav__link">About me</a></li>
            <li><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navigation;