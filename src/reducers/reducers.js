import {
    FORM_SUBMITTED,
    RIGHT_CARD_CLICKED,
    WRONG_CARD_CLICKED
} from '../actions/types';

export function formSubmission(previousState = [], action){
    switch(action.type){
        case FORM_SUBMITTED:
            return Object.assign({},
                );
        default:
            return previousState;
    }
}

export function cards(previousState = [], action){
    switch(action.type){
        case RIGHT_CARD_CLICKED:
                return Object.assign({},
                    previousState,
                    previousState.actualOrder.map((card) => {
                        if(card.type === action.card){
                            return Object.assign({}, card, {correct: true});
                        }
                        return card;
                    }),
                    { numCorrect: previousState.numCorrect + 1 }
                );
        case WRONG_CARD_CLICKED:
            return Object.assign({},
                previousState,
                previousState.actualOrder.map((card) => {
                    return Object.assign({}, card, { correct: false });
                }),
                { numCorrect: 0 });
        default:
            return previousState;
    }
}