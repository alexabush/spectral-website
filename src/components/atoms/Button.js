import React, { Component } from 'react';

class Button extends Component {
  state = {};
  render() {
    let className = 'Button';
    if (this.props.color === 'red') {
      className = className.concat(' Button--red');
    } else if (this.props.color === 'transparent') {
      className = className.concat(' Button--transparent');
    }
    if (this.props.width === 'wide') {
      className = className.concat(' Button--wide');
    }
    return (
      <div>
        <button className={className}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
