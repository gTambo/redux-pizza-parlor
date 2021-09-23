import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';
import Home from '../Home/Home';


function App() {

  return (

    <div className='App'>
      <Header />
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
          <Home />
        </Route>

        <Route path="/selectPizza">
          <PizzaList />
        </Route>

        <Route path="/admin">
          {/* <Admin /> */}
        </Route>

      </Router>

    </div>
  );
}

export default App;
