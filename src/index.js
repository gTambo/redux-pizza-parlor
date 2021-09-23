import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux'; // provides store to App; global state
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


// create CustomerInfo reducer 





// create PizzaList reducer 
const pizzaList = (state = [], action) => {
    if (action.type === 'SET_PIZZA_LIST') {
        return action.payload;
    }
    return state;
}




// create CartTotal reducer





// create reducer
const addToCart = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload]
    } else if (action.type === 'REMOVE_FROM_CART') {
        for (let item of state) {
            if (item.id === action.payload) {
                return [...state.filter(item => item.id != action.payload)];
            }
        }
    }
    return state;
}







// create store
const storeInstance = createStore(
    combineReducers({
        pizzaList,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
document.getElementById('root'));
