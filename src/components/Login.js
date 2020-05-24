import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Login extends Component {
    render() {
        return(
            <div style={styles.background}>
            <h3>Welcome to CoronaCraft!</h3>
            <form style={styles.form}>
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

const styles = {
    background: {
        backgroundColor: 'antiquewhite',
        textAlign: 'center',
        borderRadius: 20,
    },
}

export default Login;