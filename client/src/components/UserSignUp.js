import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserSignUp extends Component {
  state = {

  }

  handleNewUser() {
    //onclick, send POST request to /api/users
    //sign in user
    //route back to previous user page
  }

  render() {

    return (
      <div className="form--centered">
          <h2>Sign Up</h2>
          
          <form>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" value=""></input>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" value=""></input>
            <label htmlFor="emailAddress">Email Address</label>
            <input id="emailAddress" name="emailAddress" type="email" value=""></input>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value=""></input>
            <button className="button" type="submit" onlick={this.handleNewUser}>Sign Up</button><Link className="button button-secondary" to="/">Cancel</Link>
          </form>
          <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
      </div>

    );
  }

}