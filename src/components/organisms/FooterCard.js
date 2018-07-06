import React, { Component } from 'react';
import '../../App.css';
import hikingModel from '../../assets/hikingModel.jpeg';

class FooterCard extends Component {
  render() {
    return (
      <div className="Card FooterCard">
        <h1>FooterCard</h1>
        <img src={hikingModel} alt="" />
      </div>
    );
  }
}

export default FooterCard;
