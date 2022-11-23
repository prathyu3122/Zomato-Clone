import React from 'react'
import {useNavigate} from 'react-router-dom'
import './OrderOnline.css'

export default function Mumbai() {
    
    const handleClick = useNavigate();
    const backNavigate = useNavigate();

    return (
        <div>
            <h1>Mumbai Restaurants</h1>
            <div class="places-container">
                <div class="card" >
                    <img src="https://pipingpotcurry.com/wp-content/uploads/2018/09/Pav-Bhaji.jpg" />
                    <h3>Pav Bhaji</h3>
                    <h4>Price:420</h4>
                    <h5>Rating:4.4&emsp;&emsp;
                    <button onClick={()=>handleClick("/Cart")}>ADD</button></h5>
                </div>
                <div class="card">
                    <img src="https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg" />
                    <h3>Vada Pav</h3>
                    <h4>Price:320</h4>
                    <h5>Rating:4.3&emsp;&emsp;
                    <button onClick={()=>handleClick("/Cart")}>ADD</button></h5>
                </div>
                <div class="card" >
                    <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Paneer-Butter-Masala-Recipe-1.jpg" />
                    <h3>Paneer-Butter-Masala</h3>
                    <h4>Price:250</h4>
                    <h5>Rating:4.3&emsp;&emsp;
                    <button onClick={()=>handleClick("/Cart")}>ADD</button></h5>
                </div>
                <div class="card">
                    <img src="https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg" />
                    <h3>Mysore-Masala-Dosa</h3>
                    <h4>Price:50</h4>
                    <h5>Rating:4.6&emsp;&emsp;
                    <button onClick={()=>handleClick("/Cart")}>ADD</button></h5>
                </div>
            </div>
            <div class="back-navigation-container">
                <button className="back-navigation" onClick={() => backNavigate("/order-online")}></button>
            </div>
        </div>
    )
}
