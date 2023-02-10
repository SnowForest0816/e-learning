import React from 'react';

import './TokenCard.css';

function TokenCard ({data}) {
    return (
        <div className='token-card'>
            <img src={data.image} alt="" width="218px" height="218px" />
            <h1>{data.title}</h1>
            <p>TAKEN ON</p>
            <div>{data.date}</div>
        </div>
    );
}

export default TokenCard;