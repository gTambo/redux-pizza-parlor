import { useHistory } from 'react-router-dom'

function Home() {

    const history = useHistory();

    const orderPizza = () => {
        console.log('select the pizza');
        history.push('/selectPizza')
    }

    return(
        <>
            <img src='images/pizza_photo.png' />
            <p>Pizza is great.</p>
            <button onClick={orderPizza}>Order Pizza</button>
        </>
    )
}

export default Home;