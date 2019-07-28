import React, { Component } from 'react';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import PickOfTheWeek from './Components/PickOfTheWeek';
import HomeShowcase from './Components/HomeShowcase';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBackgroundColor: 'transparent'
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.updateNavbar);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.updateNavbar);
  };

  updateNavbar = () => {
    if (
      window.pageYOffset >= 100 &&
      this.state.navBackgroundColor === 'transparent'
    ) {
      this.setState({ navBackgroundColor: 'var(--bert-black)' });
    } else if (
      window.pageYOffset < 200 &&
      this.state.navBackgroundColor === 'var(--bert-black)'
    ) {
      this.setState({ navBackgroundColor: 'transparent' });
    }
  };

  render() {
    return (
      <div className='App'>
        <Navigationbar backgroundcolor={this.state.navBackgroundColor} />
        <PickOfTheWeek />
        <HomeShowcase title={'Marvelous Heroes & Determined Crusaders'} />
        <HomeShowcase title={'Fantastic Fantasies'} />
        <HomeShowcase title={'Superior Sci-Fi'} />
        <HomeShowcase title={'Laugh out Loud'} />
        <HomeShowcase title={'Crime Stoppers'} />
        <Footer />
      </div>
    );
  }
}
