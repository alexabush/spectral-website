import React, { Component } from 'react';
import '../../App.css';

class PointCard extends Component {
  render() {
    return (
      <div className="Card PointCard">
        <h2 className="text PointCard__h2">{this.props.header}</h2>
        <p className="text PointCard__p">{this.props.text}</p>
      </div>
    );
  }
}

export default PointCard;
