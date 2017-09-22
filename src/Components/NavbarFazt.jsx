import React, { Component } from 'react';

class NavbarFazt extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          {this.props.title}
        </span>
      </nav>
    )
  }
}

export default NavbarFazt;
