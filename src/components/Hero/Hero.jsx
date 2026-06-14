import React from 'react'
import MyImg from '../../assets/images/myimage.png'
import Btn from '../common/Btn'
import Cube from '../../assets/images/Rectangle1.svg'
import Circle from '../../assets/images/circle.svg'
import Ring from '../../assets/images/ring.svg'

const Hero = () => {
    const Icons = [
        "ri-html5-fill",
        "ri-css3-fill",
        "ri-bootstrap-fill",
        "ri-javascript-fill",
        "ri-reactjs-line",
        "ri-nodejs-line"

    ]

    return (
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-7">
                        <div className="hero-left">
                            <h1>Nice to meet you! I’m <span>Israr Hussain Faridi.</span></h1>
                            <p>Based in Pakistan, I’m a front-end developer passionate about building accessible web apps that users love.</p>

                            {/* Infinite Marquee Container */}

                            <div className="marquee-container">
                                <div className="marquee-track">
                                    {/* Original Group */}
                                    <div className="marquee-group">
                                        {Icons.map((item, key) => {
                                            return <i key={key} className={item}></i>
                                        })}
                                    </div>
                                    {/* Duplicate Group for Seamless Looping */}
                                    <div className="marquee-group" aria-hidden="true">
                                        {Icons.map((item, key) => {
                                            return <i key={key} className={item}></i>
                                        })}
                                    </div>
                                </div>
                            </div>


                            {/* btn */}
                            <Btn text={"Contact Me"} />
                            <div className="cube">
                                <img className='img-fluid' src={Cube} alt="" />
                            </div>
                            <div className="cube2">
                                <img className='img-fluid' src={Cube} alt="" />
                            </div>
                            <div className="circle">
                                <img className='img-fluid' src={Circle} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-5">
                        <div className="hero-right">
                            <img className='img-fluid' src={MyImg} alt="" />


                        </div>
                    </div>
                </div>
            </div>
            <div className="ringImg">
                <img className='img-fluid' src={Ring} alt="" />
            </div>
        </section>
    )
}

export default Hero
