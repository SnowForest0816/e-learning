import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import image1 from '../../assets/img/mini-logo.png';
import image2 from '../../assets/img/Logo.png';
import image3 from '../../assets/img/2.png';

function Header () {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
            </div>
            <div className='main'>
                <Link to="/casius">Casius</Link>
                <Link to="/reports">Reports</Link>
                <Link to="/account">Account</Link>
                <Link to="/">Study Zone</Link>
                <button>
                    Sign Up
                    <img src={image3} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Header;