import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component{
    render(){
    return (
        <ul class="header">
            <li><NavLink activeClassName="active" to="/"> Home</NavLink></li>
            <li><NavLink to="/Projects" activeClassName="active"> Projects</NavLink></li>
            <li><NavLink to="/About" activeClassName="active"> About</NavLink></li>
        </ul>
    );
    }
}

export default NavBar;
