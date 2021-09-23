import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux'; // provides store to App; global state
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


// create CustomerInfo reducer 





// create PizzaList reducer 
const pizzaList




// create CartTotal reducer





// create reducer








// create store
const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
document.getElementById('root'));
