import React from 'react'
import "./styles/Header.css"
import Logo from "./images/Logo.jpg"
const Navbar = () => {
  return (
    <div className="container">
        <nav>
           <img src={Logo} alt="" />
        </nav>
    </div>
  )
}

export default Navbar