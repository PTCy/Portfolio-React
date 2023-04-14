import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillGithub} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='hearder-socials'>
        <a href="https://www.facebook.com/profile.php?id=100006564033955" target="_blank"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/palm_mmmy/?igshid=MTIzZWQxMDU%3D&fbclid=IwAR02UF1FWDOMXqHATO6cXpEeGhfjrVCpJEIPMWyfgZ92RZ0ocQNxn25cs2o" target="_blank"><AiFillInstagram/></a>
        <a href="https://github.com/PTCy" target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocial