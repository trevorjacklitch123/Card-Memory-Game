import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { formSubmitted, rightCardClicked, wrongCardClicked } from './actions/actions';
import iState from './initialState.js';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(formSubmitted(iState(['Spades'])));
store.dispatch(formSubmitted(iState(['Spades',  'Clubs'])));
store.dispatch(formSubmitted(iState(['Spades', 'Clubs', 'Diamonds', 'Hearts'])));

export default store;