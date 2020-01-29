import React, { Component } from 'react';
import '../App.css';

class Facilities extends Component {
  render() {
    return this.props.facilities.map(facility => (
      <div key={facility.id} className="facility-info">
        <img src={facility.src} alt="loading" width="28px" height="28px" />
        <div>
          <b>{facility.title}</b>
        </div>
        <div>{facility.description}</div>
      </div>
    ));
  }
}

export default Facilities;
