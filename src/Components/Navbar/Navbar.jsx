import React from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav id = "navbar">
            <div class="container">
            <h1 class="logo"><a href="/index.html">BMSIT</a></h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/academics'>Academics</Link></li>
                <li><Link to='/facilities'>Facilities</Link></li>
            </ul>
            </div>
        </nav>
<Outlet/>
    </>
  )
}

export default Navbar