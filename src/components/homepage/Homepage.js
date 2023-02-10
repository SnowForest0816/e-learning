import React from 'react';
// import { Link } from 'react-router-dom';

import './Homepage.css';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import ExamCard from '../comp/ExamCard.js';
import GameCard from '../comp/GameCard.js';

// import image1 from '../../assets/img/mini-logo.png';
// import image2 from '../../assets/img/Logo-white.png';
// import image3 from '../../assets/img/2.png';
import image4 from '../../assets/img/3.png';
import image5 from '../../assets/img/4.png';
import SunLogo from '../../assets/img/sun-logo.png';
import mask6 from '../../assets/img/mask6.png';
import TopicImg from '../../assets/img/img-topic.png';
import plane from '../../assets/img/paper-plane.png';
import flashcards from '../../assets/img/flashcards.png';
import DevImage from '../../assets/img/practice-img.png';

function Homepage () {
    const examCards = [
        {
            title: 'biology',
        },
        {
            title: 'history',
        },
        {
            title: 'science',
        }
    ];
    const gameCards = [
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
        {
            title: 'Math Race 2D',
        },
    ];

    return (
        <div>
            <div className='homepage-header'>
                {/* <div className='header'>
                    <div className='logo'>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>
                    <div className='home-nav'>
                        <Link to="/casius">Casius</Link>
                        <Link to="/reports">Reports</Link>
                        <Link to="/account">Account</Link>
                        <Link to="/">Study Zone</Link>
                        <button>
                            Sign Up
                            <img src={image3} alt="" />
                        </button>
                    </div>
                </div> */}
                <Header />
                <div className='header-context'>
                    <img src={SunLogo} alt="" width="84px" height="84px" />
                    <h1>The Study Zone</h1>
                    <p>Whether it’s flashcards, practice tests, reviewing <br /> material or throwing ideas around everybody <br /> studies in their own little way.</p>
                    <p>Why not make your way even easier here in the <br /> study zone? Look around at our various tools <br/> and see how they may help you.</p>
                    <button>
                        Select Subejcts
                        <img src={image5} alt="" />
                    </button>
                </div>
            </div>
            <div className='homepage-practice'>
                <div className='homepage-practice-test'>
                    <div className='homepage-practice-text'>
                        <h1>Online Test Practice</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Diam nam orci viverra at vitae neque neque. Iaculis tortor sapien nisi morbi suspendisse enim curabitur. Pharetra feugiat pretium non ac. Donec placerat iaculis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Diam nam orci viverra at vitae neque neque. Iaculis tortor sapien nisi morbi suspendisse enim curabitur. Pharetra feugiat pretium non ac. Donec placerat iaculis.</p>
                    </div>
                    <div className='homepage-practice-img'>
                        <img src={mask6} alt="" />
                    </div>
                </div>
                <div className='homepage-practice-topic'>
                    <h1>Topics</h1>
                    <h3>No matter what you study, we've got something to help!</h3>
                    <div className='homepage-practice-topics'>
                        <div className='topic'>
                            <img src={TopicImg} alt="" />
                            <p>Cell Biology</p>
                        </div>
                        <div className='topic'>
                            <img src={TopicImg} alt="" />
                            <p>Cell Biology</p>
                        </div>
                        <div className='topic'>
                            <img src={TopicImg} alt="" />
                            <p>Cell Biology</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homepage-flashcards'>
                <div className='homepage-flashcards-text'>
                    <h1>Flashcards</h1> 
                    <p>Lorem ipsum dolor sit amet consectetur. Diam nam orci viverra at vitae neque neque. Iaculis tortor <br/> sapien nisi morbi suspendisse enim curabitur. Pharetra feugiat pretium non ac. Donec placerat iaculis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam nam orci viverra at vitae neque neque. Iaculis tortor <br/> sapien nisi morbi suspendisse enim curabitur. Pharetra feugiat pretium non ac. Donec placerat iaculis.</p>
                    <button>
                        Start Practicing
                        <img src={image4} alt="" />
                    </button>
                </div>
                <div className='homepage-flashcards-imgs'>
                    <div className='flashcards-brain'>
                        <img src={plane} alt="" />
                    </div>
                    <div className='flashcards-nda'>
                        <img src={flashcards} alt="" />
                    </div>
                </div>
            </div>
            <div className='homepage-exams'>
                <div className='homepage-exams-content'>
                    <div className='exams-content-img'>
                        <img src={DevImage} alt="" />
                    </div>
                    <div className='exams-content-text'>
                        <h1>Practice Exams</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Diam nam orci viverra at vitae neque neque. Iaculis tortor sapien nisi morbi suspendisse enim curabitur. Pharetra feugiat pretium non ac. Donec placerat iaculis. Lorem ipsum dolor sit amet consectetur. Diam nam orci viverra at vitae neque neque. Iaculis tortor sapien nisi morbi suspendisse enim curabitur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Diam nam orci viverra at vitae neque neque. Iaculis tortor sapien nisi morbi suspendisse enim curabitur. Pharetra feugiat pretium non ac. Donec placerat iaculis.</p>
                        <button>
                            CTA Button
                            <img src={image4} alt="" />
                        </button>
                    </div>
                </div>
                <div className='homepage-exams-cards'>
                    {
                        examCards.map((item) => <ExamCard />) 
                    }
                </div>
            </div>
            <div className='homepage-games'>
                <div className='homepage-games-title'>
                    Games
                </div>
                <div className='homepage-games-cards'>  
                    {
                        gameCards.map((item) => <GameCard />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;