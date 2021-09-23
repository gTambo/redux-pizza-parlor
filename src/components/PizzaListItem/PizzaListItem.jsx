import React, { useState } from 'react';

//this function/component will send each individual pizza to the map loop in PizzaList
//TODO - add the conditional rendering for add/remove button(s)

function PizzaListItem({ pizza }) {
    const [pizzaPicked, setPizzaPicked] = useState(false);

    const handleRemove
    
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
