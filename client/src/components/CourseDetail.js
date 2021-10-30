import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Material from './Material';


export default class CourseDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  course: [],
      user: [],
		  loading: false,
      id: this.props.match.params.id,
		};
	  }
	componentDidMount() {
		this.setState({ loading: true });
		fetch(`http://localhost:5000/api/courses/${this.state.id}`)
		  .then(response => response.json())
		  .then(data => this.setState( {
			course: data.course,
      user: data.course.user,
			loading: false
		  }))
		  .catch(err => console.log('Error fetching and parsing data', err));
	  }

	handleDelete() {
		//when delete course button is clicked, send a DELETE request to API 
		// at /api/courses/:id 
		// ** requires authentication
	}

	render() {
    const { context } = this.props;
    const user = context.authenticatedUser;

		return (
			<div>
				<div className="actions--bar">
					<div className="wrap">
            {/* Only shows update course and delete course buttons if user is authenticated. */}
            {(user !== null) ? 
						(<React.Fragment>
              <Link className="button" to={`/courses/${this.state.id}/update`}>Update Course</Link>
              <button className="button" href="#" onClick={this.handleDelete}>Delete Course</button>
            </React.Fragment> ) : (null)}
            
						<Link className="button button-secondary" to="/">Return to List</Link>
					</div>
				</div>
				{(this.state.loading) ? 
          			(<div className="loader">Loading...</div>) :  
		          (<div className="wrap">
								<h2>Course Detail</h2>
								<form>
									<div className="main--flex">
										<div>
											<h3 className="course--detail--title">Course</h3>
											<h4 className="course--name">{this.state.course.title}</h4>
											<p>{`By ${this.state.user.firstName} ${this.state.user.lastName}`}</p>

											<p>{this.state.course.description}</p>
										</div>
										<div>
                      {(this.state.course.estimatedTime) ? 
											  (<React.Fragment>
                          <h3 className="course--detail--title">Estimated Time</h3>
                          <p>{this.state.course.estimatedTime}</p>
                        </React.Fragment>) : (null) }
                      {(this.state.course.materialsNeeded) ? 
                        (<React.Fragment>
                          <h3 className="course--detail--title">Materials Needed</h3>
                          <ul className="course--detail--list">
                              {this.state.course.materialsNeeded}
                          </ul>
                          </React.Fragment>) : (null) }
										</div>
									</div>
								</form>
							</div>
			)}			
			</div>
		);
	}

}