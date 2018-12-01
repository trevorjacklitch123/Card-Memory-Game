import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

const CardList = ({ cards }) => (
    <div id="grid-container">
        {cards.map((card, index) => (
            <Card
            key={index}
            card={card.type}
            correct={card.correct}
            onClick={onClick(card)}
            />
        ))}
    </div>
);

function onClick(card){
    const correctOrder = this.props.correctOrder;
    const numCorrect = this.props.numCorrect;
    const nextCard = correctOrder[numCorrect];
    
    if(card === nextCard){
        this.props.rightCardClicked(card);
        this.props.numCorrectIncrement();
    }
    else{
        this.props.wrongCardClicked();
        this.props.numCorrectReset();
    }
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            correct: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    correctOrder: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    numCorrect: PropTypes.number.isRequired,
    
    rightCardClicked: PropTypes.func.isRequired,
    wrongCardClicked: PropTypes.func.isRequired,
    numCorrectIncrement: PropTypes.func.isRequired,
    numCorrectReset: PropTypes.func.isRequired
}

export default CardList;