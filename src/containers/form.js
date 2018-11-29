import React from 'react';
import { connect } from 'react-redux';
import { actualOrderCards, correctOrderCards, numCorrectReset } from '../actions/actions.js';
import { createCorrectOrder, createActualOrder } from '../initialState';

const Form = ({ dispatch }) => {
    let oneSuit;
    let twoSuits;
    let threeSuits;
    let fourSuits;
    
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                let suits = ["Spades"];
                console.log(oneSuit, twoSuits, threeSuits, fourSuits);

                dispatch(correctOrderCards(createCorrectOrder(suits)));
                dispatch(actualOrderCards(createActualOrder(suits)));
                dispatch(numCorrectReset());
            }}
        >
            <input type="radio" name="numSuits" ref={node => (oneSuit = node)} value="1 Suit" defaultChecked /> 1 Suit<br />
            <input type="radio" name="numSuits" ref={node => (twoSuits = node)}value="2 Suits" /> 2 Suits<br />
            <input type="radio" name="numSuits" ref={node => (threeSuits = node)}value="3 Suits" /> 3 Suits<br />
            <input type="radio" name="numSuits" ref={node => (fourSuits = node)}value="4 Suits" /> 4 Suits<br />
            <input type="submit" value="New Game" />
        </form>
    )
}

export default connect()(Form);