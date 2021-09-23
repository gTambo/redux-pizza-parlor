import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux'; // provides store to App; global state
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


// create CustomerInfo reducer (ADDED BY MO THURSDAY EVENING)
const customerInfo = (state = [], action) => {
    if(action.type === "ADD_NEW_CUSTOMER") {
        return [action.payload, ...state]; //reversed so most recent appears first
    }
    return state;
}
// end code added by Mo thursday evening




// create PizzaList reducer 
const pizzaList = (state = [], action) => {
    if (action.type === 'SET_PIZZA_LIST') {
        return action.payload;
    }
    return state;
}




// create CartTotal reducer





// create reducer








// create store
const storeInstance = createStore(
    combineReducers({
        pizzaList,
        customerInfo, //added by Mo Thursday evening
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
document.getElementById('root'));
