import React, { Component } from 'react';

import uuid from 'uuid';
import axios from 'axios';

import './App.css';

import NavbarFazt from './Components/NavbarFazt.jsx';
import Projects from './Components/Projects';
import AddProjects from './Components/AddProjects.jsx';
import Photo from './Components/Photo.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      photos: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Amazun',
          category: 'Web App',
          manager: 'Jeff besos'
        },
        {
          id: uuid.v4(),
          title: 'Apel',
          category: 'Mobile App',
          manager: 'Timco'
        },
        {
          id: uuid.v4(),
          title: 'Faisbuk',
          category: 'Web App',
          manager: 'Marciano'
        }
      ]
    })
  }

  componentDidMount() {
    this.getExternalData();
  }

  getExternalData() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
      .then(response => {
        this.setState({
          photos: response.data
        })
      })
      .catch(err => console.err(err));
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(project => {
      return project.id === id;
    });
    projects.splice(index, 1);
    this.setState({projects});
  }

  render() {
    return (
      <div className="App">
        <NavbarFazt title="FaztApp"/>

        <div className="container">
          <AddProjects addProject={this.handleAddProject.bind(this)}/>
          <Projects
            projects={this.state.projects}
            onDelete={this.handleDeleteProject.bind(this)}
          />

          <div className="card-deck">
            {
              this.state.photos.map(photo => {
                return <Photo key={photo.id} {...photo} />
              })
            }
          </div>

        </div>
      </div>
    );
  }
}

export default App;
