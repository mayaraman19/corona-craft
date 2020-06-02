import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Signup extends Component {
    render() {
        return( //style={styles.background} >
            <div className="signup" > 
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
                    <p>
                        <label className="textfield">Confirm Password</label>
                        <input type="confirmPassword"/>
                    </p>
                    <p>
                        <label className="textfield">User Handle</label>
                        <input type="userHandle"/>
                    </p>
                </form>
                <button>
                <NavLink to="/">Sign Up!</NavLink>
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

export default Signup;