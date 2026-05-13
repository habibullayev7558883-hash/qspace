import React from 'react'
import '../Pages/Space.css'
import checkyellow from '../assets/check.svg'
import checkblue from '../assets/checkblue.svg'

const Space = () => {
  return (
    <section className='space'>
    <div className="container">
        <div className="space__wrapper">
            <p className='space__title'>Spaces</p>

            <ul className='space__list'>

                <li className="space__item office">
                    <div className="space__box1">
                        <p className='space__text'>Office Space</p>
                        <p className='space__info'>Your own private office with a flexible contract that adapts to your business.</p>
                    </div>
                    <div className="space__box2">
                        <div className="space__cover">
                            <img src={checkyellow} alt="checkyellow" />
                            <p className='space__desc'>Access 24/7</p>
                        </div>

                        <div className="space__cover">
                            <img src={checkyellow} alt="checkyellow" />
                            <p className='space__desc'>Fully furnished or just the space</p>
                        </div>

                        <div className="space__cover">
                            <img src={checkyellow} alt="checkyellow" />
                            <p className='space__desc'>Includes all the perks of a Coworking Membership</p>
                        </div>

                    </div>
                        <a className='space__link-ofice' href="#">Learn More</a>
                </li>

                <li className="space__item">
                    <div className="space__box1">
                        <p className='space__text'>Membership</p>
                        <p className='space__info'>Work at any of our +3000 coworking spaces worldwide</p>
                    </div>
                    <div className="space__box2">
                        <div className="space__cover">
                            <img src={checkblue} alt="checkblue" />
                            <p className='space__desc'>Access during business hours</p>
                        </div>

                        <div className="space__cover">
                            <img src={checkblue} alt="checkblue" />
                            <p className='space__desc'>Access to our agenda of networking events</p>
                        </div>

                        <div className="space__cover">
                            <img src={checkblue} alt="checkblue" />
                            <p className='space__desc'>Join a community of like-minded professionals</p>
                        </div>

                    </div>
                        <a className='space__link' href="#">Learn More</a>
                </li>

                <li className="space__item">
                    <div className="space__box1">
                        <p className='space__text'>Private Desk</p>
                        <p className='space__info'>Your own private desk in a shared office, locker included, all with a flexible contract.</p>
                    </div>
                    <div className="space__box2">
                        <div className="space__cover">
                            <img src={checkyellow} alt="checkyellow" />
                            <p className='space__desc'>Access 24/7</p>
                        </div>

                        <div className="space__cover">
                            <img src={checkyellow} alt="checkyellow" />
                            <p className='space__desc'>Set your business address at qSpace</p>
                        </div>

                        <div className="space__cover">
                            <img src={checkyellow} alt="checkyellow" />
                            <p className='space__desc'>Free access to 1000+ coworking spaces worldwide</p>
                        </div>

                    </div>
                        <a className='space__link desk' href="#">Learn More</a>
                </li>

                <li className="space__item">
                    <div className="space__box1">
                        <p className='space__text'>Meeting Room</p>
                        <p className='space__info'>On-demand meeting rooms and event spaces with all the services you need.</p>
                    </div>
                    <div className="space__box2">
                        <div className="space__cover">
                            <img src={checkblue} alt="checkblue" />
                            <p className='space__desc'>Choose from variety of sizes and locations</p>
                        </div>

                        <div className="space__cover">
                            <img src={checkblue} alt="checkblue" />
                            <p className='space__desc'>Discounts for members</p>
                        </div>

                        <div className="space__cover">
                            <img src={checkblue} alt="checkblue" />
                            <p className='space__desc'>Catering and other services available</p>
                        </div>

                    </div>
                        <a className='space__link' href="#">Learn More</a>
                </li>

            </ul>
        </div>
    </div>
    </section>
  )
}

export default Space