import React, { Component } from 'react';
import './App.css';
import HeaderCard from './components/organisms/HeaderCard';
import Footer from './components/organisms/Footer';
import IntroCard from './components/organisms/IntroCard';
import FooterCard from './components/organisms/FooterCard';
import ImageCard from './components/organisms/ImageCard';
import PointCard from './components/organisms/PointCard';
import IntroPointCard from './components/organisms/IntroPointCard';

import computer_model from './assets/computer_model.jpg';
import mountain_bike_model from './assets/mountain_bike_model.JPG';
import photographer_model from './assets/photographer_model.jpg';

class App extends Component {
  state = {
    imageCardData: [
      {
        image: photographer_model,
        header: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam doloremque ipsam fugit magnam?'
      },
      {
        image: mountain_bike_model,
        header: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam doloremque ipsam fugit magnam?'
      },
      {
        image: computer_model,
        header: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam doloremque ipsam fugit magnam?'
      }
    ],
    pointCards: [
      {
        header: 'Lorem ipsum',
        text:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe, architecto voluptate repellat nobis possimus veritatis excepturi nesciunt illum asperiores maxime perferendis laborum nihil id distinctio ad adipisci, dolor aliquid.'
      },
      {
        header: 'Lorem ipsum',
        text:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe, architecto voluptate repellat nobis possimus veritatis excepturi nesciunt illum asperiores maxime perferendis laborum nihil id distinctio ad adipisci, dolor aliquid.'
      },
      {
        header: 'Lorem ipsum',
        text:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut saepe, architecto voluptate repellat nobis possimus veritatis excepturi nesciunt illum asperiores maxime perferendis laborum nihil id distinctio ad adipisci, dolor aliquid.'
      }
    ]
  };
  render() {
    const imageCards = this.state.imageCardData.map(data => {
      return (
        <ImageCard image={data.image} header={data.header} text={data.text} />
      );
    });
    const pointCards = this.state.pointCards.map(data => {
      return <PointCard header={data.header} text={data.text} />;
    });
    return (
      <div className="App">
        <HeaderCard />
        <IntroCard />
        <ul className="App__ul">{imageCards}</ul>
        <IntroPointCard />
        <ul className="App__ul">{pointCards}</ul>
        <FooterCard />
        <Footer />
      </div>
    );
  }
}

export default App;
