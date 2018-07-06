import React, { Component } from 'react';
import '../../App.css';

class ImageCard extends Component {
  render() {
    return (
      <div className="Card ImageCard">
        <img src={this.props.image} alt="" />
        <h2 className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam
          doloremque ipsam fugit magnam?{' '}
        </p>
      </div>
    );
  }
}

export default ImageCard;
