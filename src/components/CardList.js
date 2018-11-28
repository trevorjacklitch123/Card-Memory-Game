import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

const CardList = ({ cards }) => (
    <div id="grid-container">
        {cards.map((card, index) => (
            <Card
            key={index}
            className="Card"
            id={card.correct ? card.type : ""}
            onClick={card.correct ? () => {} : }
            />
        ))}
    </div>
)