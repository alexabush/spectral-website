import React, { Component } from 'react';
import '../../App.css';

class IntroCard extends Component {
  render() {
    return (
      <div className="Card IntroCard">
        <h2 className="text IntroCard__h2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h2>
        <br />
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe,
          architecto voluptate repellat nobis possimus veritatis excepturi
          nesciunt illum asperiores maxime perferendis laborum nihil id
          distinctio ad adipisci, dolor aliquid.
        </p>
      </div>
    );
  }
}

export default IntroCard;
