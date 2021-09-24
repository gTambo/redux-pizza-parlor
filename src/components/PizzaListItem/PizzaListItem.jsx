import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//this function/component will send each individual pizza to the map loop in PizzaList
//TODO - add the conditional rendering for add/remove button(s)

function PizzaListItem({ pizza }) {
    const [pizzaPicked, setPizzaPicked] = useState(false);
    // const [showCart, setShowCart] = useState(false); // currently, not needed
    // const addToCart = useSelector(store => store.addToCart); // not needed, currently
    const lasagna = useDispatch();

    const addPizza = () => {
        console.log('Item selected: ', pizza.name);
        setPizzaPicked(true);
        const action = {
            type: 'ADD_TO_CART',
            payload: pizza,
        }
        lasagna(action);
    }
    const handleRemove = (pizzaId) => {
        console.log('Item to remove: ', pizza.name, 'id:', pizzaId);
        setPizzaPicked(false);
        const action = {
            type: 'REMOVE_FROM_CART',
            payload: pizzaId,
        }
        lasagna(action);
    }


    return (
        <div className="container">
            {pizzaPicked ? (
                <li key={pizza.id}>
                <img width="200px" height="200px" src={pizza.image_path} />
                {pizza.name}
                {pizza.description}
                {pizza.price}
                <button onClick={ () => handleRemove(pizza.id) }>Remove</button>
            </li>
            ) : ( <li key={pizza.id}>
                <img width="200px" height="200px" src={pizza.image_path} /><br /><br />
                {pizza.name} -<br />
                {pizza.description} -<br />
                <b>${pizza.price}</b><br /><br />
                <button onClick={ () => addPizza() }>Add</button>
            </li>)}
            {/* TODO: Remove these Lines */}
            {/* <button onClick={ () => setShowCart(!showCart)}>ShowCart</button>
            {showCart ? (<ul>{addToCart.map( (item, i) => <li key={i}>{item.name}</li>)}</ul>) : (<p>Cart Empty</p>)} */}
        </div>
    )
}

export default PizzaListItem;
