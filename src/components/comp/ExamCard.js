import React from 'react';

import './ExamCard.css';
import image from '../../assets/img/card1.png';
import img from '../../assets/img/3.png';

function ExamCard () {
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h1>BIOLOGY</h1>
            <button>
                Take Exam
                <img src={img} alt="" />
            </button>
            <div className='time-card'>
                <div className='time-clock'>
                    <div className='time-card-black'>0</div>
                    <p>H</p>
                </div>
                <div className='time-clock'>
                    <div className='time-card-black'>2</div>
                    <p>H</p>
                </div>
                <h1>:</h1>
                <div className='time-clock'>
                    <div className='time-card-green'>3</div>
                    <p>M</p>
                </div>
                <div className='time-clock'>
                    <div className='time-card-green'>5</div>
                    <p>M</p>
                </div>
            </div>
        </div>
    );
}

export default ExamCard;