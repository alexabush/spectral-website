import React, { Component } from 'react';
import '../../App.css';
import Button from '../atoms/Button';
import hikingModel from '../../assets/hikingModel.jpeg';

class HeaderCard extends Component {
  render() {
    return (
      <div className="Card HeaderCard">
        <h1 className="text Header--h1">Spectral</h1>
        <p className="text Header--p">
          Responsive Site Template based on Spectral design by HTML5 Up.
        </p>
        <Button color="red" text="Activate" />
      </div>
    );
  }
}

export default HeaderCard;
