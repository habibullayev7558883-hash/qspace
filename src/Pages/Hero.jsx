import React from 'react'
import '../Pages/Hero.css'
import hero from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
            <div className="hero__wrapper">
                
                <div className="hero__left works">
                    <p className='works__desc'>Jakarta, Indonesia</p>
                    <div className="works__box1">
                        <h1 className='works__title'>Revolutioning the way people and company works</h1>
                    </div>
                    <div className="works__box2">
                        <p className='works__text'>Eu consectetur odio imperdiet ipsum dui. Magna sed sagittis lobortis vel auctor pharetra risus.</p>
                    </div>
                    <a className='works__link' href="#">Reservation</a>
                </div>

                <div className="hero__right">
                    <img src={hero} alt="hero" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero