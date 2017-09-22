import React, { Component } from 'react';
import uuid from 'uuid';

class AddProjects extends Component {

  constructor() {
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web App', 'Mobile App', 'Desktop App']
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.txtTitle.value === '') {
      alert('title is required');
    } else if (this.txtManager.value === ''){
      alert('Manager is required');
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.txtTitle.value,
          manager: this.txtManager.value,
          category: this.slCategory.value
        }
      }, function () {
        console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    console.log('submited');
  }

  render() {

    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>
        {category}
      </option>
    })

    return(
      <div>
        <h3>Add Project Component</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>
              Title
            </label>
            <input
              type="text"
              ref={(input) => this.txtTitle = input}
              className="form-control"
            />
          </div>

          <div>
            <label>
              Manager
            </label>
            <input
              type="text"
              ref={(input) => this.txtManager = input}
              className="form-control"
            />
          </div>

          <div>
            <label>Category</label>
            <select
              className="form-control"
              ref={(select) => this.slCategory = select}>
              {categoryOptions}
            </select>
          </div>
          <br/>
          <input
            className="btn btn-success"
            type="submit"
            value="Add a Category"/>

        </form>
      </div>
    )
  }
}

export default AddProjects;
