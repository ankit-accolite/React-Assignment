import React from 'react'
import './Header.css'
import logoimg from './bk.png'
const Header = () => {
  return (
    <div className='header'>
        <img src={logoimg} className='bulb' alt='Google Keep'></img>
        <h2 className='keep'>Google Keep</h2>
    </div>
  )
}

export default Header;
