import React from 'react'
import NavBar from './NavBar';
import HomeCards from './HomeCards';
import './Home.css';

export default function Home() {
    return (
        <div className="body-container">
            <div className="main-container">
                <div>
                <NavBar />
                </div>
                
                <div className="heading-container">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" />
                    <p className="tag-line">Discover the best food & drinks in Hyderabad</p>
                    <div className="search-container">
                        <input type="search" class="search-bar" placeholder="Search for restaurant, cuisine or a dish" />
                    </div>
                </div>

                
            </div>
            <div>
            <HomeCards />
            </div>

        </div>
    )
}
