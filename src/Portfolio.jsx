import React from 'react'
import './index.css'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const Portfolio = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}


export default Portfolio