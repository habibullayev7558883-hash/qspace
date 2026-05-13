import React from 'react'
import '../Component/Footer.css'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <ul className='footer__list'>
                    <li className="footer__item">
                        <a href="#"><img src={logo} alt="logo" /></a>
                        <p>Revolutioning the way people and company works</p>
                        <div className="footer__link-img">
                            <a target='__blank' href="https://www.facebook.com/?locale=ru_RU"><img src={facebook} alt="facebook" /></a>
                            <a target='__blank' href="https://www.instagram.com/"><img src={instagram} alt="instagram" /></a>
                            <a target='__blank' href="https://www.youtube.com/"><img src={youtube} alt="youtube" /></a>
                            <a target='__blank' href="https://x.com/?lang=ru"><img src={twitter} alt="twitter" /></a>
                            <a target='__blank' href="https://uz.linkedin.com/"><img src={linkedin} alt="linkedin" /></a>
                        </div>
                    </li>
                    <li className="footer__item"></li>
                    <li className="footer__item"></li>
                    <li className="footer__item"></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer