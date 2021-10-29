import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UpdateCourse extends Component {
  constructor(props) {
		super(props);
		this.state = {
		  course: [],
      user: [],
		  loading: false,
		};

    this.handleUpdate = this.handleUpdate.bind(this);
    this.input = React.createRef() //creates uncontrolled components for form inputs
  }

  componentDidMount() {
		this.setState({ loading: true });
		fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
		  .then(response => response.json())
		  .then(data => this.setState( {
			course: data.course,
      user: data.course.user,
			loading: false
		  }))
		  .catch(err => console.log('Error fetching and parsing data', err));
  }

  handleUpdate() {
    //requires authentication

    // PUT request with a JSON body using fetch
    // from https://jasonwatmore.com/post/2020/11/02/react-fetch-http-put-request-examples
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json' },
    }
		fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`, requestOptions)
		  .then(response => {
        response.json()
        console.log(response.message, response.status) //no auth currently, expected "You don't have authorization to edit this course." 
        if (response.status === 204) {
        this.props.history.replace(`/courses/${this.props.match.params.id}`)
      }})
      .catch(err => console.log('Error fetching and parsing data', err));
  }

  ErrorsDisplay() {
    let errorsDisplay = null;

    if (this.props.errors.length) {
      errorsDisplay = (
        <div className="validation--errors">
          <h3>Validation Errors</h3>
          <ul>
            {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      );
    }
    return errorsDisplay;
  }

  render() {

    return (
      <div className="wrap">
        <h2>Update Course</h2>
        {/* {this.ErrorsDisplay} */}
        <form>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input id="courseTitle" name="courseTitle" type="text" defaultValue={this.state.course.title} ref={this.input}></input>

              <p>{`By ${this.state.user.firstName} ${this.state.user.lastName}`}</p>

              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" name="courseDescription" defaultValue={this.state.course.description} ref={this.input}></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input id="estimatedTime" name="estimatedTime" type="text" defaultValue={this.state.course.estimatedTime} ref={this.input}></input>

              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" name="materialsNeeded" defaultValue= {this.state.course.materialsNeeded} ref={this.input}></textarea>
            </div>
          </div>
          <button className="button" type="submit" onClick={this.handleUpdate}>Update Course</button><Link className="button button-secondary" to={`/courses/${this.props.match.params.id}`}>Cancel</Link>
      </form>
    </div>
    );
  }

}