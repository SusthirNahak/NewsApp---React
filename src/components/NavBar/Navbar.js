import React from 'react'
import './Navbar.css'
import Humberger from '../Humberger/Humberger'

const Navbar = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'> <Humberger setCategory={setCategory}/>  </div>
        <img style={{cursor:"pointer"}} src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png " alt='logo' height="80%" />
    </div>
  )
}

export default Navbar