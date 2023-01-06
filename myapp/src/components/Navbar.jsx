import React from 'react'
import Logo from '../Assets/Group 114.png'
import '../components/navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className="navbar container">
            <img className="logo" src={Logo} alt='logoImage'></img>
            <input type="checkbox" id="toggler" />
            <label for="toggler"><i class="ri-menu-line"></i></label>
            <div className="menu">
                <ul className="list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><button id="blueBtn"  href="/">Start a Company</button></li>
                </ul>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar
