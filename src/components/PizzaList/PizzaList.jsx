import './PizzaList.css';
import { useSelector, useDispatch } from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { useEffect } from 'react';
import axios from 'axios';

function PizzaList () {
    const pizzaList = useSelector(store => store.pizzaList);
    const dispatch = useDispatch();

    const fetchPizzaList = ( { pizza } ) => {
        axios({
            method: '
            payload: 
        })
    }

    useEffect( () => {
        fetchPizzaList();
    }, []);

    return (
        <div className="pizza-display">
            <h2>Step 1: Select Your Pizza</h2>
            <ul>
                {pizzaList.map( (pizza, index) => <li key={index}><PizzaListItem pizza={pizza} /></li>)}
            </ul>
        </div>
    )
}

export default PizzaList;