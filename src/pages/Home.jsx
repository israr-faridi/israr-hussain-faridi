import React from 'react'
import Hero from '../components/Hero/Hero'
import Project from '../components/Project/Project'
import Skills from '../components/Skills/Skills'
import Experience from '../components/Experience/Experience'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Experience />
            <Skills />
            <Project />
            <Contact />
        </>
    )
}

export default Home
