import React from 'react'

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

        </section>
    )
}

export default Experience
