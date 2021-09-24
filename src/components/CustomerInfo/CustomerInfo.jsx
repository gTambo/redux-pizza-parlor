import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// NO. 2
import TotalItem from '../TotalItem/TotalItem';


function CustomerInfo() {

    const dispatch = useDispatch();
    const history = useHistory();

    const sendToCheckout = () => {
        history.push('/checkout');
    }

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [orderType, setOrderType] = useState('false'); // Delivery = TRUE, Pickup = FALSE

    const newCustomerObject = {
        name: name,
        address: address,
        city: city,
        zip: zip,
        orderType: orderType
    }

    // delivery = true, pickup = false
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Adding Customer info client-side', newCustomerObject);
        const action = { type: 'ADD_NEW_CUSTOMER', payload: newCustomerObject }
        dispatch(action);
    }


    return (

        <div className="customerInfoPage">
            <h2><u>Enter Customer Information</u></h2>

            <form onSubmit={handleSubmit} className="customerForm">
                <div className="inputs">
                    <input
                        required
                        placeholder="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    /> <br /> <br />

                    <input
                        required
                        placeholder="Street Address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    /> <br /> <br />

                    <input
                        required
                        placeholder="City"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    /> <br /> <br />

                    <input
                        required
                        type="number"
                        placeholder="Zip"
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                    /> <br /> <br />
                </div>
                <br />

                Is this order for <b>delivery</b> or <b>pickup</b>?<br /><br />

                <div>
                    <label>
                        <input
                            type="radio"
                            value={true}
                            checked={orderType === 'true'}
                            name="orderType"
                            onChange={(event) => setOrderType(event.target.value)}
                        />
                        Delivery
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value={false}
                            checked={orderType === 'false'}
                            name="orderType"
                            onChange={(event) => setOrderType(event.target.value)}
                        />
                        Pickup
                    </label>
                </div>
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>

            <h2>Cart Total:</h2>

            <h3>$</h3>
            {/* NOTES: CART TOTAL GOES HERE  */}
            {/* NO. 2 */}
            <TotalItem />

            <br />
            <button onClick={sendToCheckout}>Go To Checkout</button>




        </div>
    )


}

export default CustomerInfo;