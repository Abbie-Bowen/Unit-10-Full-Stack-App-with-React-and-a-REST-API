import React, { Component } from 'react';

export default class UserSignIn extends Component {
  state = {

  }

  handleSignIn() {
    //on click, makes a GET call to /api/users
    //redirects the user back to the previous screen (i.e. if they were on create course
    //then sign in, they would go back to create course)
  }

  //persist user credentials using HTTP cookie so user authentication state is maintained

  render() {

    return (
      <div class="form--centered">
        <h2>Sign In</h2>
        
        <form>
          <label for="emailAddress">Email Address</label>
          <input id="emailAddress" name="emailAddress" type="email" value=""></input>
          <label for="password">Password</label>
          <input id="password" name="password" type="password" value=""></input>
          <button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href={/*link to home page*/};">Cancel</button>
        </form>
        <p>Don't have a user account? Click here to <a href={/* link to sign UP page */}>sign up</a>!</p>
        
      </div>
    );
  }

}