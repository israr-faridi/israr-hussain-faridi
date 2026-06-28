import React from 'react'
import Heading from '../common/Heading'
import Ring from '../../assets/images/ring.svg'


const Experience = () => {
    const experienceData = [
        {
            postion: "Frontend Web Developer",
            company: "SourceCode",
            year: "Aug 2025 - Present",
            para: "As a Frontend Web Developer at SourceCode, I build and maintain high-performance, user-friendly web interfaces using HTML, CSS, JavaScript, and React.js. I specialize in translating complex UI/UX designs into fully responsive web layouts. Collaborating closely with senior engineering and backend teams, I integrate APIs, debug front-end issues, and regularly participate in code reviews to maintain clean, scalable, and efficient codebases."
        },
        {
            postion: "Frontend Developer Inter",
            company: "ITX-Solution",
            year: "3 Months",
            para: "During my 3-month Frontend Web Development internship at ITX Solution in Karachi, I built live client projects using HTML, CSS, and JavaScript. Working closely with senior developers and under the mentorship of the CEO, I focused on creating responsive, clean, and user-friendly interfaces. This hands-on experience sharpened my real-world workflows, cross-browser debugging, and performance optimization skills."
        },
    ]
    return (
        <section className='experience'>
            <div className="container">
                <Heading heading={"Experience"} />
                <div className="row g-4">
                    {experienceData.map((item, idx) => {
                        return <div key={idx} className="col-12 col-md-12 col-lg-6">
                            <div className="exprience_box">
                                <h3> {item.postion} - <span>{item.company}</span></h3>
                                <h4>{item.year}</h4>
                                <p>{item.para}</p>
                            </div>
                        </div>
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
