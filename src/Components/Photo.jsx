import React, { Component } from 'react';

class Photo extends Component {
  render () {
    return(
      <div className="col-md-3">
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.thumbnailUrl}
            alt={this.props.title}
          />
          <div className="car-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint iste aliquid, nesciunt recusandae eligendi dignissimos expedita quos modi sunt eaque reprehenderit, voluptates perferendis itaque a cupiditate earum, unde officiis voluptate.
            </p>
            <button className="btn btn-success">
              Hello
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Photo;
