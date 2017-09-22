import React, { Component } from 'react';


class ProjectItem extends Component {
  deleteProject(id) {
    const response = window.confirm('are you sure you want to delete it?');
    if (response) {
      this.props.onDelete(id);
    }
  }

  render() {
    return(
      <li className="card-body">
        {this.props.project.title} - {this.props.project.category} - { this.props.project.manager}
         <button
          className="btn btn-danger"
          onClick={this.deleteProject.bind(this, this.props.project.id)}>
          Delete
        </button>
      </li>
    )
  }
}

export default ProjectItem;
