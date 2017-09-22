import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectItem from './ProjectItem.jsx';

class Projects extends Component {
  render() {
    let projects = this.props.projects.map((project, i) => {
      return (
        <ProjectItem
          key={i}
          project={project}
          onDelete={this.props.onDelete}
        />
      )
    });

    return(
      <div style={{marginTop: '20px'}}>
        <ul className="card">
          {projects}
        </ul>
      </div>
    )
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects;
