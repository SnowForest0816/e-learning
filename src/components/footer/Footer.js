import React from 'react';

import './Footer.css';

import image1 from '../../assets/img/footer-logo1.png';
import image2 from '../../assets/img/footer-logo2.png';

function Footer () {
    return (
        <div className='footer'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
        </div>
    );
}

export default Footer;