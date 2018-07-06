import React, { Component } from 'react';
import '../../App.css';
import Button from '../atoms/Button';

class FooterCard extends Component {
  render() {
    return (
      <div className="Card FooterCard">
        <h2 className="text">FooterCard</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluptate
          eaque, provident nihil sit odio.
        </p>
        <div className="div--space-between">
          <Button color="red" text="Activate" />
          <Button color="transparent" text="Learn More" />
        </div>
      </div>
    );
  }
}

export default FooterCard;
