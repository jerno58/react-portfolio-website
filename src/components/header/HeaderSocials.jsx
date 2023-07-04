import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/joshua-erno-47654b1b6/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jerno58" target="_blank"><FaGithub/></a>
        {/* <a href="https://dribbble.com" target="_blank"><FiDribbble/></a> */}

    </div>
  )
}

export default HeaderSocials