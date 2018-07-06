import React, { Component } from 'react';
import '../../App.css';
import Button from '../atoms/Button';
import hikingModel from '../../assets/hikingModel.jpeg';

class HeaderCard extends Component {
  render() {
    return (
      <div className="Card HeaderCard">
        <h1 className="text h1--Header">Spectral</h1>
        <p className="text p--Header">Responsive Site Template</p>
        <Button color="red" text="Activate" />
      </div>
    );
  }
}

export default HeaderCard;
