import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateCourse extends Component {
  state = {
    errors: this.props.errors,
  }

  handleCreate() {
    //onclick, send POST request to /api/courses
    // ** requires authentication
  }

  
  ErrorsDisplay() {
    let errorsDisplay = null;

    if (this.state.errors.length) {
      errorsDisplay = (
        <div className="validation--errors">
          <h3>Validation Errors</h3>
          <ul>
            {this.state.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      );
    }
    return errorsDisplay;
  }

  render() {

    return (
      <div className="wrap">
        <h2>Create Course</h2>
        {this.ErrorsDisplay}
        <form>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input id="courseTitle" name="courseTitle" type="text" value=""></input>

              <p>By Joe Smith</p>

              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" name="courseDescription"></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input id="estimatedTime" name="estimatedTime" type="text" value=""></input>

              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
            </div>
          </div>
          <button className="button" type="submit" onClick={this.handleCreate}>Create Course</button><Link className="button button-secondary" to="/">Cancel</Link>
        </form>
      </div>
    );
  }


}