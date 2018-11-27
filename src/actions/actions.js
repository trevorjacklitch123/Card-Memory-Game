import { FORM_SUBMITTED, RIGHT_CARD_CLICKED, WRONG_CARD_CLICKED } from './types';

// The paramater suits is an array of suits that are included in the game. Ex. ["Diamonds", "Hearts"]
export function formSubmitted(suits){
    return {type: FORM_SUBMITTED, suits}
}
// The parameter card is the name of the card clicked. Ex. "KingSpades".
export function rightCardClicked(card){
    return {type: RIGHT_CARD_CLICKED, card: card}
}
export function wrongCardClicked(){
    return {type: WRONG_CARD_CLICKED}
}