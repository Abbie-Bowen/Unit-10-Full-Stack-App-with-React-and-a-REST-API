import './global.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch,
  } from 'react-router-dom';

import { Provider } from './components/Context';
import Header from './components/Header';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';

class App extends Component {


  // componentDidMount() {
  // }
  
  render() {
    return (
      <Provider>
        <Router>
          <div className="root">
            <Header />
            <main>
              <Switch>
                <Route exact path = "/" component = {Courses} />
                {/* <Route path = "/courses/create" component = {CreateCourse} /> */}
                <Route path = "/courses/:id/update" component = {UpdateCourse} />
                <Route path = "/courses/:id" component = {CourseDetail} />
                <Route path = "/signin" component = {UserSignIn} />
                <Route path = "/signup" component = {UserSignUp} />
                <Route path = "/signout" component = {UserSignOut} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
