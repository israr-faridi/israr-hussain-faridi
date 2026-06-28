import React, { useState } from 'react'
import Btn from '../common/Btn'
import { Link } from 'react-router-dom'
import img1 from "../../assets/images/projects/zohastone.gif"
import img2 from "../../assets/images/projects/company.gif"
import img3 from "../../assets/images/projects/ecommerce.gif"
import img4 from "../../assets/images/projects/resturant.gif"
import img5 from "../../assets/images/projects/store.gif"
import img6 from "../../assets/images/projects/uniassignment.gif"
import img7 from "../../assets/images/projects/ebook.gif"
import img8 from "../../assets/images/projects/emirates.gif"
import img9 from "../../assets/images/projects/publication.gif"
import img10 from "../../assets/images/projects/kdp.gif"
import img11 from "../../assets/images/projects/ebookuk.gif"
import img12 from "../../assets/images/projects/megahcm.gif"
import Heading from '../common/Heading'

const Project = () => {
    const projects = [
        {
            name: "MegaHCM (Working)",
            liveLink: "https://megahcm.vercel.app/",
            img: img12
        },
        {
            name: "Ebook (Working)",
            liveLink: "https://ebook-uae.vercel.app/",
            img: img7
        },
        {
            name: "Ebook Uk",
            liveLink: "https://sourcecodetesting.com/ebook/israr/ebookuk/",
            img: img11
        },
        {
            name: "UniassigmentMaster",
            liveLink: "https://uniassignmentmaster.co.uk/",
            img: img6
        },
        {
            name: "Emirates Book Publishing",
            liveLink: "https://emiratesbookpublishing.com/",
            img: img8
        },
        {
            name: "Publication",
            liveLink: "https://sourcecodetesting.com/ebook/israr/publication/",
            img: img9
        },
        {
            name: "KDP",
            liveLink: "https://kdpauthorcentral.com/",
            img: img10
        },
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
    const [visibleCount, setVisibleCount] = useState(6);

    const visibleProjects = projects.slice(0, visibleCount);

    const handleToggleProjects = (e) => {
        if (visibleCount >= projects.length) {
            setVisibleCount(6);
        } else {
            setVisibleCount(prevCount => prevCount + 3);
        }
    };

    return (
        <section className='project'>
            <div className="container">
                <Heading heading={"Projects"} />
                <div className="porject_wrapper">
                    {visibleProjects.map((item, idx) => {
                        return <div key={idx} className="project_box">
                            <Link to={item.liveLink} target={"_blank"} >
                                <img className='img-fluid' src={item.img} alt="" />
                                <div className="porject_box_overlay">
                                    <h4>{item.name}</h4>
                                    {/* <Btn link={item.liveLink} target={"_blank"} text={"View Website"} /> */}
                                    <span className='mybtn'>View Website</span>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
                {/* Show button only if there are more remaining projects to display */}
                <div className="view_more_container" >
                    <Btn name={"view_more_btn"} onclick={handleToggleProjects} text={visibleCount >= projects.length ? "Show Less" : "View More"} />
                </div>
            </div>
        </section>
    )
}

export default Project