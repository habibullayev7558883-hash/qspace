import React from 'react'
import logo from '../assets/logo.svg'
import '../Component/Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__wrapper">
                <a href="https://qspace.awehunt.com/en-us/index.html"><img src={logo} alt="logo" /></a>
                <ul className='header__list'>
                    <li><a className='header__link' href="#"></a>Home</li>
                    <li><a className='header__link' href="#"></a>Facilities</li>
                    <li><a className='header__link' href="#"></a>Spaces</li>
                    <li><a className='header__link' href="#"></a>Community</li>
                    <li><a className='header__link' href="#"></a>Contact</li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header