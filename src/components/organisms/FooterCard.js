import React, { Component } from 'react';
import '../../App.css';
import Button from '../atoms/Button';

class FooterCard extends Component {
  render() {
    return (
      <div className="Card FooterCard">
        <h2 className="text FooterCard__h2">FooterCard</h2>
        <p className="text FooterCard__p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluptate
          eaque, provident nihil sit odio.
        </p>
        <div className="div--space-between">
          <Button color="red" width="wide" text="Activate" />
          <Button color="transparent" width="wide" text="Learn More" />
        </div>
      </div>
    );
  }
}

export default FooterCard;
