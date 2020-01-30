import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        {this.props.header.map(logo => (
          <img
            key={logo.id}
            className="logo"
            src={logo.src}
            alt={logo.alt}
            width="28px"
          />
        ))}
      </div>
    );
  }
}

export default Header;
