import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
  change = e => {
    const id = Number(e.target.getAttribute('position'));
    this.props.change(id);
  };

  render() {
    return this.props.button.map((button, index) => (
      <div
        key={index}
        style={{ backgroundColor: button.bgColor, borderRadius: button.radius }}
        className="button-name"
      >
        <p>{button.name}</p>
        <input
          onChange={e => this.change(e)}
          position={button.id}
          name={button}
          type="radio"
          className="but"
        />
      </div>
    ));
  }
}

export default Button;
