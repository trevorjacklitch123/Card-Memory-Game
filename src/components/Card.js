import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ onClick, card, correct }) => (
    <div
    className="card"
    id={ correct ? card : "" }
    onClick={ correct ? () => {} : (card) => onClick(card) }
    />
)

Card.propTypes = {
    onClick: PropTypes.func.isRequired,
    card: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
}

export default Card;