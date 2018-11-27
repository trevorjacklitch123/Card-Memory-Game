import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { correctOrderCards, actualOrderCards, rightCardClicked, wrongCardClicked, numCorrectIncrement, numCorrectReset } from './actions/actions';
import { createCorrectOrder, createActualOrder } from './initialState.js';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(correctOrderCards(createCorrectOrder(["Spades", "Clubs"])));
store.dispatch(actualOrderCards(createActualOrder(["Spades", "Clubs"])));

export default store;