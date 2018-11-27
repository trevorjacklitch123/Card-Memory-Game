import { CORRECT_ORDER_CARDS, ACTUAL_ORDER_CARDS, RIGHT_CARD_CLICKED, WRONG_CARD_CLICKED, NUM_CORRECT_INCREMENT, NUM_CORRECT_RESET } from './types';


// The parameter cards is an array of strings being card names.
export function correctOrderCards(cards){
    return {type: CORRECT_ORDER_CARDS, cards}
}
// The parameter cards is an array of objects. Each object has a card name and a correct boolean.
export function actualOrderCards(cards){
    return {type: ACTUAL_ORDER_CARDS, cards}
}
// The parameter card is the name of the card clicked. Ex. "KingSpades".
export function rightCardClicked(card){
    return {type: RIGHT_CARD_CLICKED, card}
}
export function wrongCardClicked(){
    return {type: WRONG_CARD_CLICKED}
}
export function numCorrectIncrement(){
    return {type: NUM_CORRECT_INCREMENT}
}
export function numCorrectReset(){
    return {type: NUM_CORRECT_RESET}
}