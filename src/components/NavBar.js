<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component{
    render(){
    return (
        <ul class="header">
            <li><NavLink exact activeClassName="active" to="/"> Home</NavLink></li>
            <li><NavLink to="/Projects" activeClassName="active"> Projects</NavLink></li>
            <li><NavLink to="/About" activeClassName="active"> About</NavLink></li>
        </ul>
    );
    }
}

export default NavBar;
>>>>>>> 9a7916c15da251020225f87af97fa48a331b7c6f
