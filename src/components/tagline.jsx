import React, { Component } from 'react';

class Tagline extends Component {
  render() {
    return (
      <div style={{ color: 'white', margin: '10px 0 ' }}>
        {this.props.tagline}
      </div>
    );
  }
}

export default Tagline;
