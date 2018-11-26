import { FORM_SUBMITTED, CARD_CLICKED } from './types';

export function formSubmitted(suits){
    return {type: FORM_SUBMITTED, suits}
}
export function cardClicked(card){
    return {type: CARD_CLICKED, card}
}