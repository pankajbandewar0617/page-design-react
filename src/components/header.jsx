import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          className="logo"
          src={require('../images/back.jpg')}
          alt="back"
          width="28px"
        />
        <img
          className="logo"
          src={require('../images/home.png')}
          alt="home"
          width="28px"
        />
        <img
          className="logo"
          src={require('../images/human.jpeg')}
          alt="profile"
          width="28px"
        />
      </div>
    );
  }
}

export default Header;
