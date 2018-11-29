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
            />
        ))}
    </div>
)

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            correct: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    rightCardClicked: PropTypes.func.isRequired,
    wrongCardClicked: PropTypes.func.isRequired,
    numCorrectIncrement: PropTypes.func.isRequired,
    numCorrectReset: PropTypes.func.isRequired
}

export default CardList;