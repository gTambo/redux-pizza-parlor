import './PizzaList.css';
import { useSelector, useDispatch } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import CartTotal from '../CartTotal/CartTotal'
import { useEffect } from 'react';
import axios from 'axios';

function PizzaList () {
    const pizzaList = useSelector(store => store.pizzaList);
    const dispatch = useDispatch();

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
        <>
        <CartTotal />
        <div className="pizza-display">
            <h2>Step 1: Select Your Pizza</h2>
            <ul>
                {pizzaList.map( (pizza, index) => <PizzaListItem key={pizza.id} pizza={pizza} index={index} />)}
            </ul>
        </div>
        </>
    )
}

export default PizzaList;