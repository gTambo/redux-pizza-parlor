import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

function TotalItem() {

    const [ newTotal, setNewTotal] = useState('');

    const reduxStore = useSelector(store => store.price)

    const addItem = () => {
        const action = { type: 'TOTAL_ALL_ITEMS', payload: newTotal};
        dispatch(action);
        setNewTotal('');
    }

    return(
        <h1>{JSON.stringify(reduxStore)}</h1>
    )
}

export default TotalItem;