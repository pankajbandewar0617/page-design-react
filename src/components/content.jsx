import React, { Component } from 'react';
import '../App.css';

class Content extends Component {
  render() {
    return this.props.content.map((content, index) => (
      <div key={index} className="content-value">
        <div style={{ fontWeight: 'lighter', fontSize: '12px' }}>
          {content.title}
        </div>
        <div style={{ fontWeight: 'bolder', fontSize: '14px' }}>
          {content.description}
        </div>
      </div>
    ));
  }
}

export default Content;
