import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // dont have to type index.js

import {isDevelopment} from '../config/config';

const initialState = {};

const middleWare = [thunk];

let store;

if (isDevelopment)
    store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleWare), // cause middleWare is an array
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enabling redux chrome exetnsion
        ));

else
    // dont want to use chrome redux DevTools extension
    store = createStore(rootReducer,
        initialState,
        applyMiddleware(...middleWare));

export default store;