import React from 'react'
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navigation-container">
            <ul className="navigation-container">
                <NavLink>
                    <li class="list-item"><Link to="/" class="active">Investor Relations</Link></li>
                    <li class="list-item"><Link to="/aboutus">Add Restaurant</Link></li>
                    <li class="list-item"><Link to="/aboutus">About Us</Link></li> 
                    <li class="list-item"><Link to="/login">Log In</Link></li>
                    <li class="list-item"><Link to="/signin">Sign up</Link></li>
                </NavLink>
            </ul>
        </div>
    )
}
