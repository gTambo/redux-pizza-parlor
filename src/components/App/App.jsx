import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customerInfo">Customer Info</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/selectPizza">Select Pizza</Link>
          </li>
        </ul>

        <Route path="/customerInfo">
          {/* <CustomerInfo /> */}
        </Route>

        <Route path="/checkout">
          {/* <Checkout /> */}
        </Route>

        <Route path="/" exact>
          {/* <Home /> */}
        </Route>

        <Route path="selectPizza">
          {/* <SelectPizza /> */}
        </Route>

        <Route path="/admin">
          {/* <Admin /> */}
        </Route>

      </Router>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

    </div>
  );
}

export default App;
