import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Login extends Component {
    render() {
        return( //style={styles.background} >
            <div className="login" > 
                <h3>Welcome to CoronaCraft!</h3>
                <form style={styles.form}>
                    <p>
                        <label className="textfield">Username</label>
                        <input/>
                    </p>
                    <p>
                        <label className="textfield">Password</label>
                        <input type="password"/>
                    </p>
                </form>
                <button>
                <NavLink to="/">Log in!</NavLink>
                </button>
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