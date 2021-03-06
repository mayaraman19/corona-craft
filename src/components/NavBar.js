import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component{
    logout = () =>{
        localStorage.clear("token");
        localStorage.setItem("loggedin", false);
    }

    render(){
    return (
        <ul className="NavBar">
            <li ><NavLink exact activeClassName="active" to="/"> Home</NavLink></li>
            <li><NavLink to="/Projects" activeClassName="active"> Projects</NavLink></li>
            <li><NavLink to="/About" activeClassName="active"> About</NavLink></li>
            <li><NavLink to="/Login" activeClassName="active"> Login</NavLink></li>
            <li><NavLink to="/Signup" activeClassName="active"> Signup</NavLink></li>
            <li onClick={this.logout}><NavLink to="/" activeClassName="active"> Logout</NavLink></li>
        </ul>
    );
    }
}

const styles={
    logout: {
        float: 'right',
        marginTop: 15,
        color: 'green',
        borderRadius: 5
    }
}

export default NavBar;
