import './PizzaList.css';
import { useSelector, useDispatch } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { useEffect } from 'react';
import axios from 'axios';
// NO. 2
import { useHistory } from 'react-router-dom';

function PizzaList () {
    const pizzaList = useSelector(store => store.pizzaList);
    const dispatch = useDispatch();
    // NO. 3
    const history = useHistory();
    // NO. 4
    const customerInfo = () => {
        history.push('/customerInfo');
    }

    const fetchPizzaList = () => {
        axios({
            method: 'GET',
            url: '/api/pizza',
        }).then(response => {
            console.log('Pizza data: ', response.data);
            dispatch({
                type: 'SET_PIZZA_LIST',
                payload: response.data,
                });
            }).catch((err) => {
                console.log('Error', err);
        });
    }

    useEffect( () => {
        fetchPizzaList();
    }, []);

    return (
        <div className="pizza-display">
            <h2>Step 1: Select Your Pizza</h2>
            <ul>
                {pizzaList.map( (pizza, index) => <li key={pizza.id}><PizzaListItem pizza={pizza} index={index} /></li>)}
            </ul>
            {/* NO. 1 */}
            <button onClick={customerInfo}>Next</button>
        </div>
    )
}

export default PizzaList;