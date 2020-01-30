import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
  componentDidMount() {
    this.props.change(1);
  }

  onChange = e => {
    const id = Number(e.target.getAttribute('position'));
    this.props.change(id);
  };

  render() {
    return this.props.button.map((button, index) => (
      <div
        key={index}
        position={button.id}
        style={{
          backgroundColor: button.bgColor,
          borderRadius: button.radius,
          height: button.height
        }}
        className="button-name"
      >
        <p>{button.name}</p>
        <input
          onChange={e => this.onChange(e)}
          position={button.id}
          name={button}
          type="radio"
          className="btn"
          checked={button.checked}
        />
      </div>
    ));
  }
}

export default Button;
