import React from 'react'
import '../Pages/Goals.css'
import goals from '../assets/goals.svg'

const Goals = () => {
  return (
    <section className='goals'>
    <div className="container">
        <div className="goals__wrapper">
            <div className="goals__left">
                <img src={goals} alt="goals" />
            </div>

            <div className="goals__right">
                <p className='goals__about'>About</p>
                    <h3 className='goals__title'>Our Goals</h3>
                <div className="goals__box1">
                    <p className='goals__desc'>We believe work is about people and ideas. qSpace are inhabited by forward thinkers, innovators and game changers who are confident in achieving their goals. </p>
                </div>
                <a className='goals__link' href="#">Learn more</a>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Goals