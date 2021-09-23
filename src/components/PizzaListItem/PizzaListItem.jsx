import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//this function/component will send each individual pizza to the map loop in PizzaList
//TODO - add the conditional rendering for add/remove button(s)

function PizzaListItem({ pizza }) {
    const [pizzaPicked, setPizzaPicked] = useState(false);

    const addToCart = useSelector(store => store.addToCart);
    const lasagna = useDispatch();

    const addPizza = () => {
        console.log('Pizza selected: ', pizza.name);
        const action = {
            type: 'ADD_TO_CART',
            payload: pizza,
        }
        lasagna(action);
    }
    const handleRemove = (pizzaId) => {
        console.log();
        const action = {
            type: 'REMOVE_FROM_CART',
            payload: pizzaId,
        }
    }

    return (
        <div className="container">
            (<li key={pizza.id}>
                <img width="200px" height="200px" src={pizza.image_path} />
                {pizza.name} -
                {pizza.description} -
                {pizza.price}
            </li>)
        </div>
    )
}

export default PizzaListItem;
