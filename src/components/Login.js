import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Login extends Component {
    render() {
        return(
            <div>
            <h3>Welcome to CoronaCraft!</h3>
            <form>
                <label>Username</label>
                <input />
                <label>Password</label>
                <input />
            </form>
            <NavLink to="/Home">Log in!</NavLink>
            </div>
        );
    }
}

export default Login;