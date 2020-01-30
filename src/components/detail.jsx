import React, { Component } from 'react';
import Content from './content';
import Facilities from './facilities';

class Detail extends Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <h3 style={{ width: 'min-content' }}>Single Health</h3>
        <div className="content">
          <Content content={this.props.content} />
        </div>
        <div style={{ textAlign: 'center', fontSize: '12px' }}>
          <img
            src={require('../images/tick.png')}
            width="14px"
            height="14px"
            alt="tick"
          />
          <b>What's included</b>
        </div>
        <div style={{ padding: '10px' }}>
          <div className="facility">
            <Facilities facilities={this.props.facilities} />
          </div>
          <div className="get">Get this</div>
          <div className="more">More info ></div>
        </div>
      </div>
    );
  }
}

export default Detail;
