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

import withContext from './components/Context';

const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CourseDetailWithContext = withContext(CourseDetail);

class App extends Component {


  // componentDidMount() {
  // }
  
  render() {
    return (
      <Provider>
        <Router>
          <div className="root">
            <HeaderWithContext /> {/* auth used to display user name and login/out buttons */}
            <main>
              <Switch>
                <Route exact path = "/" component = {Courses} /> {/* public route, no auth necessary */}
                {/* <Route path = "/courses/create" component = {CreateCourseWithContext} /> */} {/* auth required, private route */}
                <Route path = "/courses/:id/update" component = {UpdateCourseWithContext} /> {/* auth required, private route */}
                <Route path = "/courses/:id" component = {CourseDetailWithContext} /> {/* auth used for delete and update button display */}
                <Route path = "/signin" component = {UserSignInWithContext} />
                <Route path = "/signup" component = {UserSignUpWithContext} />
                <Route path = "/signout" component = {UserSignOutWithContext} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
