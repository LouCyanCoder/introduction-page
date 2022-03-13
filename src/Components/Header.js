import React from 'react'

const Header = () => {
  return (
    <header id="header" className="header">
        <h1 className="header__title">Hello, I am <a href="#about" className="header__link">Lucian Nguyen</a>.</h1>
        <h2 className="header__desc">I'm an aspiring Full-stack Web Developer.</h2>
    </header>
  )
}

export default Header