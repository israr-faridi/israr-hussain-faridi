import React from 'react'
import Ring from '../../assets/images/ring.svg'

const Experience = () => {
    const Field = ["Html", "Css", "JavaScript", "BootStrap", "React js", "Node js"]
    return (
        <section className='experience'>
            <div className="container">
                <div className="experience_wrapper">
                    {Field.map((item, kys) => {
                        return <h2 key={kys}>{item}</h2>
                    })}
                </div>
            </div>
            <div className="ringImg">
                <img className='img-fluid' src={Ring} alt="" />
            </div>
        </section>
    )
}

export default Experience
