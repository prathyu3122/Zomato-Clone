import React from 'react'
import './HomeCards.css';
import { useNavigate } from 'react-router-dom';

export default function HomeCards() {

    const orderOnline = useNavigate();
    
    return (
        <div className="cards-container">
            <div className="card" onClick={() => orderOnline('/order-online')}>
                <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" />                    
                <div className="card-description">
                    <p>Order Online</p>
                    <p>Stay home and order to your door step!</p> 
                </div>
            </div>
            <div className="card">
                <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" />                    
                <div className="card-description">
                    <p>Dining</p>
                    <p>View the city's favourite dining venues</p> 
                </div>
            </div>
            <div className="card">
                <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" />                    
                <div className="card-description">
                    <p>Nightlife and Clubs</p>
                    <p>Explore city's top nightlife outlets</p> 
                </div>
            </div>
        </div>
    )
}
