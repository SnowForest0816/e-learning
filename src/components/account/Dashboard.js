import React from 'react';

import './Dashboard.css';

import Header from '../header/Header.js';
import ExamCard from '../comp/ExamCard.js';
import GameCard from '../comp/GameCard.js';
import Footer from '../footer/Footer.js';

import tokencardimage1 from '../../assets/img/img-topic.png';
import tokencardimage2 from '../../assets/img/brain-card.png';
import progress from '../../assets/img/progress.png';
import tick from '../../assets/img/tick.png';
import sword from '../../assets/img/sword.png';
import lock from '../../assets/img/lock.png';

function Dashboard () {
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
        }
    ];

    return (
        <div>
            <Header />
            <div className='dashboard-main'>
                <h1>Dashboard</h1>
                <div className='dashboard-main-progress'>
                    <div className='progress-var'>
                        <img src={progress} alt="" />
                    </div>
                    <div className='progress-icons'>
                        <div className='progress-icon'>
                            <div className='circle'>
                                <div className='semi-circle'>
                                    <img src={tick} alt="" />
                                </div>
                            </div>
                            <h1>Start</h1>
                        </div>
                        <div className='progress-icon'>
                            <div className='circle-active'>
                                <div className='semi-circle'>
                                    <img src={sword} alt="" />
                                </div>
                            </div>
                            <p>Progress1</p>
                        </div>
                        <div className='progress-icon'>
                            <div className='circle'>
                                <img src={lock} alt="" />
                            </div>
                            <p>Progress2</p>
                        </div>
                        <div className='progress-icon'>
                            <div className='circle'>
                                <img src={lock} alt="" />
                            </div>
                            <p>Done</p>
                        </div>
                    </div>
                </div>
                <div className='dashboard-main-table'>
                    <h1>Daily Task</h1>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Task Title</td>
                                    <td>Description</td>
                                    <td>Importance</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontWeight: "600"}}>Lorem Ipsum</td>
                                    <td>Lorem Ipsum dolor amits sit espium</td>
                                    <td style={{color: "#7FC41C"}}>High</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight: "600"}}>Lorem Ipsum</td>
                                    <td>Lorem Ipsum dolor amits sit espium</td>
                                    <td style={{color: "#7FC41C"}}>High</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight: "600"}}>Lorem Ipsum</td>
                                    <td>Lorem Ipsum dolor amits sit espium</td>
                                    <td style={{color: "#7FC41C"}}>High</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight: "600"}}>Lorem Ipsum</td>
                                    <td>Lorem Ipsum dolor amits sit espium</td>
                                    <td style={{color: "#7FC41C"}}>High</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div className='dashboard-events'>
                <div className='dashboard-events-calendar'>
                    <h1>Activites Calender</h1>
                </div>
                <div className='dashboard-events-notification'>
                    <h1>Notifications</h1>
                </div>
            </div> */}
            <div className='dashboard-happenings'>
                <h1>Latest Happenings</h1>
                <div className='dashboard-happenings-cards'>
                    <div className='token-card'>
                        <img src={tokencardimage2} alt="" width="218px" height="218px" />
                        <h1>Brain</h1>
                    </div>
                    <div className='token-card'>
                        <img src={tokencardimage1} alt="" width="218px" height="218px" />
                        <h1>Cell biology</h1>
                    </div>
                    <div className='token-card'>
                        <img src={tokencardimage2} alt="" width="218px" height="218px" />
                        <h1>Brain</h1>
                    </div>
                </div>  
            </div>
            <div className='dashboard-exams'>
                <h1>Latest Exams</h1>
                <div className='dashboard-exams-cards'>
                    {
                        examCards.map((item) => <ExamCard />) 
                    }
                </div>
            </div>
            <div className='dashboard-games'>
                <h1>Games</h1>
                <div className='dashboard-games-cards'>  
                    {
                        gameCards.map((item) => <GameCard />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;