import React, { Component, useDebugValue } from 'react';
import { Link } from 'react-router-dom';

export default class UserSignIn extends Component {
  state = {
    username: '',
    password: '',
    errors: []
  }

  render() {

    return (
      <div className="form--centered">
        <h2>Sign In</h2>
        
        <form>
          <label htmlFor="emailAddress">Email Address</label>
          <input id="emailAddress" name="emailAddress" type="email" defaultValue="Email Address" onChange={this.change}></input>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" defaultValue="Password" onChange={this.change}></input>
          <button className="button" type="submit">Sign In</button><Link className="button button-secondary" to='/'>Cancel</Link>
        </form>
        <p>Don't have a user account? Click here to <Link to="/signup">sign up</Link>!</p>
        
      </div>
    );
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = () => {
    const { context } = this.props;
    //on click, makes a GET call to /api/users
    //redirects the user back to the previous screen (i.e. if they were on create course
    //then sign in, they would go back to create course)
  }

  //persist user credentials using HTTP cookie so user authentication state is maintained



}