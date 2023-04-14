import React from 'react'
import {FaFacebookF}  from 'react-icons/fa'
import {BsInstagram, BsGithub}  from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <section id="footer">
      <a href="" className="footer-logo">PTCy</a>

      <ul className="link-page">
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#project">Project</a>
      <a href="#contact">Contact</a>
      </ul>

      <div className="footer-social">
        <a href="https://www.facebook.com/profile.php?id=100006564033955" target='_black'><FaFacebookF/></a>
        <a href="https://www.instagram.com/palm_mmmy"  target='_black'><BsInstagram/></a>
        <a href="https://github.com/PTCy"  target='_black'><BsGithub/></a>
      </div>

      <div className="copyright">
        <small>&copy;Thodsaphon. All rights reserved.</small>
      </div>

    </section>
  )
}

export default Footer