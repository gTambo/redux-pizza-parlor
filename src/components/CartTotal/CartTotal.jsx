import React, { useState, } from "react";
import { useSelector } from "react-redux";
import { useEffect } from 'react';

function CartTotal() {

    const [ newTotal, setNewTotal ] = useState(0);
    const reduxStore = useSelector(store => store.addToCart);
    
    useEffect( () => {
        updateCartTotal();
    }, []);

    const updateCartTotal = () => {
        let total = 0;
        for(let item of reduxStore) {
            total += Number(item.price);
        }
        console.log('price: ', total);
        setNewTotal(total)
    }

    return(
        <h1>{JSON.stringify(newTotal)}</h1>
    )
}

export default CartTotal;