import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import './Cart.css'

export default function Cart() {

    const [value, setValue] = useState(0);


    const handleClickIncrement = () => {
        if(value >= 0) {
            setValue(value + 1);
        }
    }
    const handleClickDecrement = () => {
        if(value > 0) {
            setValue(value - 1);
        }
    }

    const {state} = useLocation(); 

    console.log(state.cartItems);

    return (
        <div>
            <h1>Your Cart</h1>
            <div className="cart-container">
                <table>
                    <tr>
                        <th>Food Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove Item</th>
                    </tr>
                    
                        {(state.cartItems).map(item => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.foodName}</td>
                                    <td>{item.price}</td>
                                    <td><button onClick={handleClickDecrement}>-</button> {value} <button onClick={handleClickIncrement}>+</button></td>
                                    <td><button>Remove</button></td>
                                </tr>
                            );
                        })}
                   
                </table>
            </div>
        </div>
    )
}
