import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

export default class UserSignOut extends Component {
  handleSignOut() {
    //signs out the authenticated user
    //redirects user to home page. 
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}