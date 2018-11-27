import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ onClick, card, correct }) => (
    <div
    className="Card"
    id={ correct && card }
    onClick={ correct && onClick }
    />
)

Card.PropTypes = {
    onClick: PropTypes.func.isRequired,
    card: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
}

export default Card;