import React from 'react';

import './Casius.css';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

import image from '../../assets/img/casius-image1.png';
import arrow_icon from '../../assets/img/5.png';
// import icon from '../../assets/img/4.png';
import icon1 from '../../assets/img/casius-icon1.png';
import icon2 from '../../assets/img/casius-icon2.png';
import icon3 from '../../assets/img/casius-icon3.png';
import icon4 from '../../assets/img/casius-icon4.png';
import icon5 from '../../assets/img/casius-icon5.png';
import icon6 from '../../assets/img/casius-icon6.png';
import icon7 from '../../assets/img/casius-icon7.png';
import icon8 from '../../assets/img/casius-icon8.png';

function Casius () {
    const Mail = [
        {
            state: 'send',
            text: 'Hellow'
        }, 
        {
            state: 'receive',
            text: 'Hellow is a greeting commonly used to greet someone. It can also refer to a Squarespace Circle web designer and video producer [1], a New York City based design firm.'
        },
        {
            state: 'send',
            text: 'How Are you'
        }, 
        {
            state: 'receive',
            text: 'Oops, I’m still learning and I couldn’t generate an answer right now. Please try again.'
        }
    ];

    return (
        <div>
            <Header />
            <div className='casius-nav'>
                <div className='casius-nav-img'>
                    <img src={image} alt="" />
                </div>
                <div className='casius-nav-text'>
                    <h1>Welcome to Casius</h1>
                    <p>The best study buddy you’ll ever meet. Unlike your friends, Cassius won’t leave you for that “other” study group! </p>
                    <p>Oh and he’s super smart sometimes. Type whatever question you’d like to ask and prepare to be amazed!</p>
                </div>
            </div>
            <div className='casius-main'>
                <h1>Conversation</h1>
                <div className='casius-conver'>
                    <div className='casius-conver-nav'>
                        <div className='nav-item'>
                            <div>
                                <img src={icon1} alt="" />
                            </div>
                            <p>All Subjects</p>
                        </div>
                        <div className='nav-item'>
                            <div>
                                <img src={icon2} alt="" />
                            </div>
                            <p>Mathematics</p>
                        </div>
                        <div className='nav-item'>
                            <div>
                                <img src={icon3} alt="" />
                            </div>
                            <p>Chemistry</p>
                        </div>
                        <div className='nav-item'>
                            <div>
                                <img src={icon4} alt="" />
                            </div>
                            <p>Physics</p>
                        </div>
                        <div className='nav-item'>
                            <div>
                                <img src={icon5} alt="" />
                            </div>
                            <p>English</p>
                        </div>
                        <div className='nav-item'>
                            <div>
                                <img src={icon6} alt="" />
                            </div>
                            <p>Pak Studies</p>
                        </div>
                        <div className='nav-item'>
                            <div>
                                <img src={icon7} alt="" />
                            </div>
                            <p>Biology</p>
                        </div>
                    </div>
                    <div className='casius-conver-chat'>
                        <div className='chat-log'>
                            <button>
                                Edit
                                <img src={arrow_icon} alt="" />
                            </button>
                            {
                                Mail.map((item) => (
                                    item.state === 'send'
                                        ? (<div className='send'>{item.text}</div>)
                                        : (<div className='receive'>{item.text}</div>)
                                ))
                            }
                        </div>
                        <div className='chat-send'>
                            <input type="text" placeholder="Ask me anything..." />
                            <button>
                                <img src={icon8} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Casius;