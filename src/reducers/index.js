import { combineReducers } from 'redux';
import { formSubmission, cards } from './reducers.js';

export default combineReducers({
    formSubmission, cards
});