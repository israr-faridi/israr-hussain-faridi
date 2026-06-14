import React from 'react'
import Btn from '../common/Btn'
import { Link } from 'react-router-dom'
import img1 from "../../assets/images/projects/zohastone.gif"
import img2 from "../../assets/images/projects/company.gif"
import img3 from "../../assets/images/projects/ecommerce.gif"
import img4 from "../../assets/images/projects/resturant.gif"
import img5 from "../../assets/images/projects/store.gif"

const Project = () => {
    const projects = [
        {
            name: "Zoha Stone",
            liveLink: "https://zoha-stone.netlify.app/",
            img: img1
        },
        {
            name: "Tech Company",
            liveLink: "https://israr-faridi.github.io/Dora/",
            img: img2
        },
        {
            name: "Ecommerce Design",
            liveLink: "https://israr-faridi.github.io/Gixco-ecommerce/",
            img: img3
        },
        {
            name: "Resturant Website",
            liveLink: "https://israr-faridi.github.io/Web/",
            img: img4
        },
        {
            name: "Clothes Store",
            liveLink: "https://israr-faridi.github.io/ecommerce-website",
            img: img5
        },
    ]
    return (
        <section className='project'>
            <div className="container">
                <div className="project_header">
                    <h2>Project</h2>
                    <Btn text={"Contact Me"} />
                </div>
                <div className="porject_wrapper">
                    {projects.map((item, idx) => {
                        return <Link to={item.liveLink} target={"_blank"} key={idx} className="project_box">
                            <img className='img-fluid' src={item.img} alt="" />
                            <div className="porject_box_overlay">
                                <h4>{item.name}</h4>
                                <Btn link={item.liveLink} target={"_blank"} text={"View Website"} />
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Project