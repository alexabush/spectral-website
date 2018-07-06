import React, { Component } from 'react';
import './App.css';
import HeaderCard from './components/organisms/HeaderCard';
import Footer from './components/organisms/Footer';
import IntroCard from './components/organisms/IntroCard';
import FooterCard from './components/organisms/FooterCard';
import ImageCard from './components/organisms/ImageCard';
import PointCard from './components/organisms/PointCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderCard />
        <IntroCard />
        <ImageCard />
        <PointCard />
        <FooterCard />
        <Footer />
      </div>
    );
  }
}

export default App;
