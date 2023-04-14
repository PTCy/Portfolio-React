import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Profile.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
          <h5>Hello I'm</h5>
          <h1>Thodsaphon Chuennwngsap</h1>
          <h5 className="text-light">Front - end</h5>
          <CTA/>
          <HeaderSocial/>

          <div className="img-profile">
              <img src={Me} alt="profile"/>
          </div>

          <a href="#contact" className="scroll-down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header