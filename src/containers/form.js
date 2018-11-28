import React from 'react';
import { connect } from 'react-redux';
import { actualOrderCards, correctOrderCards, numCorrectReset } from '../actions/actions.js';
import CardList from '../components/CardList.js';
import { createCorrectOrder, createActualOrder } from '../initialState';

const Form = ({ dispatch }) => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                let suits = [];
                
                dispatch(correctOrderCards(createCorrectOrder(suits)));
                dispatch(actualOrderCards(createActualOrder(suits)));
                dispatch(numCorrectReset());
            }}
        >
            <input type="radio" name="numSuits" value="1 Suit" checked /> 1 Suit<br />
            <input type="radio" name="numSuits" value="2 Suits" /> 2 Suits<br />
            <input type="radio" name="numSuits" value="3 Suits" /> 3 Suits<br />
            <input type="radio" name="numSuits" value="4 Suits" /> 4 Suits<br />
            <input type="submit" value="New Game" />
        </form>
    )
}

export default connect()(CardList);