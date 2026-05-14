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

                    <li className="footer__item space">
                        <a href="#"><img src={logo} alt="logo" /></a>
                        <div className="footer__box1">
                        <p className='footer__desc'>Revolutioning the way people and company works</p>
                        </div>
                        <div className="footer__link-img">
                            <a target='__blank' href="https://www.facebook.com/?locale=ru_RU"><img src={facebook} alt="facebook" /></a>
                            <a target='__blank' href="https://www.instagram.com/"><img src={instagram} alt="instagram" /></a>
                            <a target='__blank' href="https://www.youtube.com/"><img src={youtube} alt="youtube" /></a>
                            <a target='__blank' href="https://x.com/?lang=ru"><img src={twitter} alt="twitter" /></a>
                            <a target='__blank' href="https://uz.linkedin.com/"><img src={linkedin} alt="linkedin" /></a>
                        </div>
                    </li>

                    <li className="footer__item links">
                        <a className='footer__link-title' href="quick links">Quick Links</a>
                        <a className='footer__link' href="home">Home</a>
                        <a className='footer__link' href="facilities">Facilities</a>
                        <a className='footer__link' href="spacess">Spaces</a>
                        <a className='footer__link' href="community">Community</a>
                        <a className='footer__link' href="contact">Contact</a>
                    </li>

                    <li className="footer__item community">
                        <a className='footer__link-title' href="community">Community</a>
                        <a className='footer__link' href="events">Events</a>
                        <a className='footer__link' href="upcoming">Upcoming</a>
                        <a className='footer__link' href="articles">Articles</a>
                        <a className='footer__link' href="magazine">Magazine</a>
                    </li>

                    <li className="footer__item">
                        <a className='footer__link-title' href="newsletter">Subscribe to our newsletter</a>
                        <a className='footer__address' href="Email address">Email address</a>
                    </li>
                </ul>

                <div className="footer__bottom">
                    <p className='footer__bottom-text'>©2021 qSpace. All rights reserved <hr /></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer