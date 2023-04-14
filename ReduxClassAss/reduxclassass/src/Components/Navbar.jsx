import React from 'react'
import "./Styling/Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarDiv'>
        <h1 style={{color:"red"}}>React</h1>
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/tech">
            <li>Technologies</li>
            </Link>
            <Link to="/product">
            <li>Products</li>
            </Link>
            <Link to="/react">
            <li>React</li>
            </Link>
        </ul>
        
    </div>
  )
}

export default Navbar;