import { combineReducers } from 'redux';
import { correctOrder, actualOrder, numCorrect } from './reducers.js';

export default combineReducers({
    correctOrder,
    actualOrder,
    numCorrect
});