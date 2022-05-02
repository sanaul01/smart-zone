import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h2>logo</h2>
            </div>
            <nav className="n-link">
                <Link to='/home'>Home</Link>
                <Link to='/footer'>About</Link>
                <Link to='/home'>Product</Link>
                <Link to='/home'>Contuct Us</Link>
            </nav>
            <div className="contuct">
                <h3>contuct us</h3>
            </div>
        </div>
    );
};

export default Navbar;