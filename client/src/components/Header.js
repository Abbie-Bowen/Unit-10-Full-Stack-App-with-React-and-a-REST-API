import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    return(
      <header>
        <div className="wrap header--flex">
          <h1 className="header--logo"><NavLink to="/">Courses</NavLink></h1>
          <nav>
            {authUser ? (
              <React.Fragment>
                <ul className="header--signedin">
                  <li>{`Welcome, ${authUser.firstName} ${authUser.lastName}!`}</li>
                  <li><NavLink to="/signout">Sign Out</NavLink></li>
                </ul>
                </React.Fragment>
            ) : (
              <React.Fragment>
                <ul className="header--signedout">
                  <li><NavLink to="/signup">Sign Up</NavLink></li>
                  <li><NavLink to="/signin">Sign In</NavLink></li>
                </ul>
              </React.Fragment>
            )}
          </nav>
        </div>
      </header>
    );
  }
}