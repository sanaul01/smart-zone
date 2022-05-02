import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="h-title">
                <span>Smart</span>~<span>Zone</span>
            </div>
            <Navbar/>
        </div>
    );
};

export default Header;