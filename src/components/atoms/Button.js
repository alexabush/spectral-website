import React, { Component } from 'react';

class Button extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="Button">{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
