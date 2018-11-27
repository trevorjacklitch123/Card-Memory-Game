import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { formSubmitted, rightCardClicked, wrongCardClicked } from './actions/actions';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(formSubmitted(["Spades"]));

export default store;