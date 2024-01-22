import React, { useState } from 'react'
import { SiSecurityscorecard } from "react-icons/si";
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                <SiSecurityscorecard className='icon'/>
            
                    <h1>Secured</h1>
                </div>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/recovery'>Services</NavLink> </li>
                    <li><NavLink to='/cloud'>Cloud</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <button><NavLink to='/signIn'>Sign In</NavLink></button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
