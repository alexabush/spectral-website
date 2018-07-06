import React, { Component } from 'react';

class Button extends Component {
  state = {};
  render() {
    let className = 'Button';
    if (this.props.color === 'red') {
      className = 'Button Button--red';
    } else if (this.props.color === 'transparent') {
      className = 'Button Button--transparent';
    }
    return (
      <div>
        <button className={className}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
