import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './OrderOnline.css'
import foodItems from './foodItems.json';


export default function Hyderabad() {

    const [cart, setCart] = useState([]);

    const moveToCart = useNavigate();

    const backNavigate = useNavigate();
    
    function addItemToCart(foodItem) {
        setCart(cart => [...cart, {foodItem}]);
        // setCart(cart.splice(cart.length, 0, foodItem));
    }
    
        console.log(cart);

    return (
        <div className="hyd-container">
            <div className="heading-container">
                <h1>Hyderabad Restos</h1>
                <button className="cart" onClick={() => {moveToCart("/order-online/Hyd-restos/Cart", {state: {cartItems: cart}})}}></button>
            </div>
            
            <div class="places-container">

                {foodItems.map(foodItem => {
                    return (
                        <div class="card" key={foodItem.id} >
                            <img src={foodItem.imageSrc} />
                            <h3>{foodItem.foodName}</h3>
                            <h4>Price: {foodItem.price}</h4>
                            <h5>Rating: {foodItem.rating}</h5>
                            <button 
                            onClick={() => addItemToCart(foodItem)}
                            >ADD TO CART</button>
                        </div>
                    );
                })}
                
            </div>
            <div class="back-navigation-container">
                <button className="back-navigation" onClick={() => backNavigate("/order-online")}></button>
            </div>
        </div>
    )
}
