import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ onclick, card, correct }) => (
    <div
    className="Card"
    id={ correct ? card : "" }
    onclick={ correct ? () => {} : onclick(card) }
    />
)

Card.propTypes = {
    onclick: PropTypes.func.isRequired,
    card: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired
}

export default Card;