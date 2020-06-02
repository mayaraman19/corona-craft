import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        confirmPassword: '',
        handle: '',
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
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        handle: this.state.handle
      };
      axios
        .post('/signup', userData)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
          this.setState({
            loading: false
          });
          localStorage.setItem('loggedin', true);
          this.props.history.push('/');
        })
        .catch((err) => {
          this.setState({
            errors: err.response.data,
            loading: false
          });
          localStorage.setItem('loggedin', false);
        });
    };
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    render() {
        return (
            <div className="login" > 
            <h3>Welcome to CoronaCraft!</h3>
            <form style = {styles.form} noValidate onSubmit={this.handleSubmit}>
        <div>
          <textarea
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
        <textarea
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
        <div>
        <textarea
          id="confirmPassword"
          name="confirmPassword"
          type="confirmPassword"
          label="ConfirmPassword"
          placeholder="confirm password"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          fullWidth
        />
        </div>
        <div>
        <textarea
          id="handle"
          name="handle"
          type="handle"
          label="handle"
          placeholder="UserName"
          value={this.state.handle}
          onChange={this.handleChange}
          fullWidth
        />
        </div>
        <button
          type="submit"
        >Signup
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

  export default Signup;