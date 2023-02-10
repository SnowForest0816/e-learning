import React from 'react';

import './GameCard.css';

import image from '../../assets/img/game-image.png';

function GameCard () {
    return (
        <div className='game-card'>
            <img src={image} alt="" />
            <h1>Math Race 2D</h1>
        </div>
    );
}

export default GameCard;