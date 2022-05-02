import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo1 from '../../images/logo1.jpg';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo1} alt="" />
            </div>
            <nav className="n-link">
                <Link to='/home'>Home</Link>
                <Link to='/footer'>About</Link>
                <Link to='/home'>Product</Link>
                <Link to='/home'>Contuct Us</Link>
            </nav>
            <div>
            <button className="button n-button">Contact us</button>
            </div>
        </div>
    );
};

export default Navbar;