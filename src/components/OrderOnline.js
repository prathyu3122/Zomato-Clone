import React from 'react'
import {useNavigate} from 'react-router-dom';
import './OrderOnline.css';

export default function OrderOnline() {

    const handleClick = useNavigate();
    const backNavigate = useNavigate();

    return (
        <div>
            <h1>Restaurants at Different places</h1>
            <div class="places-container">
                <div class="card" onClick={()=>{handleClick('Hyd-restos')}}>
                    <img src="https://haecker-india.com/wp-content/uploads/2020/08/Hyderabad_Icon.png"/>
                    <h3>2 Restaurants Available</h3>
                    <h4>Delivers in 50min</h4>
                </div>
                <div class="card" onClick={()=>{handleClick('Mum-restos')}}>
                    <img src="https://previews.123rf.com/images/f1digitals/f1digitals1912/f1digitals191200115/135204703-vector-cartoon-illustration-of-i-love-mumbai-isolated-on-white-background-.jpg"/>
                    <h3>2 Restaurants Available</h3>
                    <h4>Delivers in 30min</h4>          
                </div>
                <div class="card" onClick={()=>{handleClick('Hyd-restos')}}>
                    <img src="https://image.shutterstock.com/image-illustration/goa-hand-written-lettering-palms-260nw-687274474.jpg"/>
                    <h3>2 Restaurants Available</h3>
                    <h4>Delivers in 40min</h4>
                </div>
                <div class="card" onClick={()=>{handleClick('Mum-restos')}}>
                    <img src="https://images.news18.com/ibnlive/uploads/2018/07/Delhi-cartoon.jpg?im=FitAndFill,width=1200,height=1200"/>
                    <h3>2 Restaurants Available</h3>
                    <h4>Delivers in 30min</h4>          
                </div>
            </div>
            <div class="back-navigation-container">
                <button className="back-navigation" onClick={() => backNavigate("/")}></button>
            </div>
        </div>
    )
}
