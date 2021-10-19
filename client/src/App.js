import './global.css';
import React, { Component } from 'react';
import Header from 'header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/courses/')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(err => console.log('Error fetching and parsing data', err));


  }
  
  render() {
    return (
      <div className="root">
        <Header />
        <main>
        //routes go here
        </main>
      </div>
    );
  }
}

export default App;
