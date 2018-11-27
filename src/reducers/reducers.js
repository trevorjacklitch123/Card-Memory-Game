import { CORRECT_ORDER_CARDS, ACTUAL_ORDER_CARDS, RIGHT_CARD_CLICKED, WRONG_CARD_CLICKED, NUM_CORRECT_INCREMENT, NUM_CORRECT_RESET } from '../actions/types';


export function correctOrder(previousState = [], action){
    switch(action.type){
        case CORRECT_ORDER_CARDS:
            return action.cards;
        default:
            return previousState;
    }
}

export function actualOrder(previousState = [], action){
    switch(action.type){
        case ACTUAL_ORDER_CARDS:
            return action.cards;
        case RIGHT_CARD_CLICKED:
            return previousState.map((card) => {
                if(card.type === action.card){
                    return Object.assign({}, card, {correct: true});
                }
                return card;
            });
        case WRONG_CARD_CLICKED:
            return previousState.map((card) => {
                return Object.assign({}, card, { correct: false });
            });
        default:
            return previousState;
    }
}

export function numCorrect(previousState = 0, action){
    switch(action.type){
        case NUM_CORRECT_INCREMENT:
            return previousState + 1;
        case NUM_CORRECT_RESET:
            return 0;
        default:
            return previousState;
    }
}