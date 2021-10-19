import React, { Component } from 'react';

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
      <div class="form--centered">
          <h2>Sign Up</h2>
          
          <form>
            <label for="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" value=""></input>
            <label for="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" value=""></input>
            <label for="emailAddress">Email Address</label>
            <input id="emailAddress" name="emailAddress" type="email" value=""></input>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" value=""></input>
            <button class="button" type="submit" onlick={this.handleNewUser}>Sign Up</button><button class="button button-secondary" onclick="event.preventDefault(); location.href={/* link to home page */};">Cancel</button>
          </form>
          <p>Already have a user account? Click here to <a href={/* link to sign in page */}>sign in</a>!</p>
      </div>

    );
  }

}