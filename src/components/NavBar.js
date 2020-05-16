import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return (
        <ul class="NavBar">
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/Projects"> Projects</Link></li>
            <li><Link to="/About"> About</Link></li>
        </ul>
    );
}

export default NavBar;