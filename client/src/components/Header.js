import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return(
      <header>
        <div class="wrap header--flex">
          <h1 class="header--logo"><a href={ /* home page link */}>Courses</a></h1>
          <nav>
          {/* use ternerary operator to determine which button to show */}
            <ul class="header--signedin">
              <li>Welcome, Joe Smith!</li>
              <li><a href={ /* sign out link */}>Sign Out</a></li>
            </ul>
            <ul class="header--signedout">
              <li><a href={ /* sign UP link */}>Sign Up</a></li>
              <li><a href={ /* sign OUT link */}>Sign In</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}