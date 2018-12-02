import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

const CardList = ({ cards, correctOrder, numCorrect, rightCardClicked, wrongCardClicked, numCorrectIncrement, numCorrectReset }) => (
    <div id="grid-container">
        {cards.map((card, index) => (
            <Card
            key={index}
            card={card.type}
            correct={card.correct}
            onclick={onclick(card, correctOrder, numCorrect, rightCardClicked, wrongCardClicked, numCorrectIncrement, numCorrectReset)}
            />
        ))}
    </div>
);

function onclick(card, correctOrder, numCorrect, rightCardClicked, wrongCardClicked, numCorrectIncrement, numCorrectReset){
    const nextCard = correctOrder[numCorrect];
    
    if(card === nextCard){
        rightCardClicked(card);
        numCorrectIncrement();
    }
    else{
        wrongCardClicked();
        numCorrectReset();
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