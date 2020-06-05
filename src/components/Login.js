import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          loading: false,
          errors: {}
        };
      }
      handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
          loading: true
        });
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        axios
          .post('/login', userData)
          .then((res) => {
            console.log(res.data);
            this.setState({
              loading: false
            });
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
            localStorage.setItem('loggedin', true);
            this.props.history.push('/');
          })
          .catch((err) => {
            localStorage.setItem('loggedin', false);
            this.setState({
              errors: err.response.data,
              loading: false
            });
          });
      };
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
      render() {
        return( 
            <div className="login" > 
                <h3>Welcome to CoronaCraft!</h3>
                <form style = {styles.form} noValidate onSubmit={this.handleSubmit}>
            <div>
              <input
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            </div>
            
            <div>
            <input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            </div>
            <button
              type="submit"
            >Login
            </button>
            </form>
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