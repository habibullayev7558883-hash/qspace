import React from 'react'
import '../Pages/Facilities.css'
import facilities1 from '../assets/facilities1.svg'
import facilities2 from '../assets/facilities2.svg'
import facilities3 from '../assets/facilities3.svg'
import facilities4 from '../assets/facilities4.svg'
import facilities5 from '../assets/facilities5.svg'
import facilities6 from '../assets/facilities6.svg'

const Facilities = () => {
  return (
    <section className='facilities'>
        <div className="container">
            <div className="facilities__wrapper">
                <div className="facilities__top">
                    <p className='facilites__text'>Facilities</p>
                    <h3 className='facilities__title'>The advantages that we provide</h3>
                </div>
                <ul className='facilities__list'>

                    <li className='facilities__item'>
                        <img src={facilities1} alt="facilities" />
                        <p className='facilities__info'>Engaging Community</p>
                        <div className="facilities__box1">
                        <p className='facilities__desc'>Phasellus suspendisse non, convallis quam aliquet volutpat. Netus cras quam orc.</p>
                        </div>
                    </li>

                    <li className='facilities__item'>
                        <img src={facilities2} alt="facilities" />
                        <p className='facilities__info'>Premium Facilities</p>
                        <div className="facilities__box1">
                        <p className='facilities__desc'>Diam eu, mauris, in amet viverra. Eget ut scelerisque eget nibh ut quis.</p>
                        </div>
                    </li>

                    <li className='facilities__item'>
                    <img src={facilities3} alt="facilities" />
                        <p className='facilities__info'>Affordable Price</p>
                        <div className="facilities__box2">
                        <p className='facilities__desc'>Velit, rutrum a cursus eleifend egestas.</p>
                        </div>
                    </li>

                    <li className='facilities__item'>
                    <img src={facilities4} alt="facilities" />
                        <p className='facilities__info'>Workspace Personalization</p>
                        <div className="facilities__box2">
                        <p className='facilities__desc'>Ornare tempor morbi tempor nibh est a in.</p>
                        </div>
                    </li>

                    <li className='facilities__item'>
                    <img src={facilities5} alt="facilities" />
                        <p className='facilities__info'>24/7 Access</p>
                        <div className="facilities__box3">
                        <p className='facilities__desc'>Tellus rhoncus enim nisl et lorem in sed. Congue nunc est habitant quam lectus neque.</p>
                        </div>
                    </li>

                    <li className='facilities__item'>
                    <img src={facilities6} alt="facilities" />
                        <p className='facilities__info'>Clean Environment</p>
                        <div className="facilities__box3">
                        <p className='facilities__desc'>Pretium sodales vitae id gravida tempor. Erat adipiscing orci turpis fames nunc, id diam.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Facilities