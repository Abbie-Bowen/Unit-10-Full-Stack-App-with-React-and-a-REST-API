import './global.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch,
  } from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     courses: {}
  //   }
  // }

  // componentDidMount() {
  //   fetch('http://localhost:5000/api/courses/')
  //     .then(response => response.text())
  //     .then(data => this.setState( {
  //       courses: data
  //     }))
  //     .catch(err => console.log('Error fetching and parsing data', err));
  // }
  
  render() {
    return (
      <Router>
        <div className="root">
          <Header />
          <main>
            <Switch>
              <Route exact path = "/" component = {Courses} />
              {/* <Route path = "/courses/create" component = {CreateCourse} />
              <Route path = "/courses/:id/update" component = {UpdateCourse} /> */}
              <Route path = "/courses/:id" render={() => <CourseDetail id={this.props.id} /> } />
              <Route path = "/signin" component = {UserSignIn} />
              <Route path = "/signup" component = {UserSignUp} />
              <Route path = "/signout" component = {UserSignOut} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
