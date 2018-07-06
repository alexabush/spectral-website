import React, { Component } from 'react';
import '../../App.css';

class ImageCard extends Component {
  render() {
    return (
      <div className="Card ImageCard">
        <img src={this.props.image} alt="" />
        <div className="ImageCard__text-container">
          <h2 className="text ImageCard__h2">{this.props.header}</h2>
          <p className="text ImageCard__p">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ImageCard;
