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
		};
	  }
	componentDidMount() {
		this.setState({ loading: true });
		fetch(`http://localhost:5000/api/courses/3`)
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
    let materialsNeeded = (this.state.course.materialsNeeded) ? (this.state.course.materialsNeeded.map((material) => {
      return <Material material={material} />
    })) : null;

		return (
			<div>
				<div className="actions--bar">
					<div className="wrap">
						<Link className="button" to={`/courses/${this.state.course.id}/update`}>Update Course</Link>
						<button className="button" href="#" onclick={this.handleDelete}>Delete Course</button>
						<Link className="button button-secondary" to="/">Return to List</Link>
					</div>
				</div>
				{(this.state.loading) ? 
          			(<div class="loader">Loading...</div>) :  
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

											<h3 className="course--detail--title">Materials Needed</h3>
											<ul className="course--detail--list">
                          {materialsNeeded}
											</ul>
										</div>
									</div>
								</form>
							</div>
			)}			
			</div>
		);
	}

}