import React from 'react'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage } from 'react-icons/ai'
import { FaRegLightbulb } from 'react-icons/fa'


import { useState } from 'react'

const NavBar = () => {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActive('#')} className={active === '#' ? 'active' :''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActive('#about')} className={active === '#about' ? 'active' :''}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=> setActive('#skills')} className={active === '#skills' ? 'active' :''}><FaRegLightbulb/></a>
      <a href="#project" onClick={()=> setActive('#project')} className={active === '#project' ? 'active' :''}><AiOutlineBook/></a>
      <a href="#contact" onClick={()=> setActive('#contact')} className={active === '#contact' ? 'active' :''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default NavBar