import {
    FORM_SUBMITTED,
    CARD_CLICKED
} from '../actions/types';

export function formSubmission(state = [], action){
    switch(action.type){
        case FORM_SUBMITTED:
            return action.suits
        default:
            return state;
    }
}

export function cards(state = [], action){
    switch(action.type){
        case CARD_CLICKED:
            if(action.suit === ){

            }
        default:
            return state;
    }
}