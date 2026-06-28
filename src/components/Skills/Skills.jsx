import React from 'react'
import Ring from '../../assets/images/ring.svg'
import Heading from '../common/Heading'

const Skills = () => {
    const Field = ["Html", "Css", "JavaScript", "BootStrap", "React js", "Node js"]
    return (
        <section className='skills'>
            <div className="container">
                <Heading heading={"Skills"}/>
                <div className="skills_wrapper">
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

export default Skills
