import React, { Component } from 'react';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import PickOfTheWeek from './Components/HomePage/PickOfTheWeek';
import HomeShowcase from './Components/HomePage/HomeShowcase';
import SearchResultsPage from './Components/SearchPage/SearchResultsPage';
import ItemDetailsPage from './Components/ItemDetailsPage/ItemDetailsPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      this.setState({ navBackgroundColor: 'var(--bert-navy)' });
    } else if (
      window.pageYOffset < 200 &&
      this.state.navBackgroundColor === 'var(--bert-navy)'
    ) {
      this.setState({ navBackgroundColor: 'transparent' });
    }
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navigationbar backgroundcolor={this.state.navBackgroundColor} />
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/SearchResults' component={SearchResultsPage} />
            <Route path='/Details/:id' component={ItemDetailsPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <React.Fragment>
    <PickOfTheWeek />
    <HomeShowcase
      title={'Marvelous Heroes & Determined Crusaders'}
      discoverOption={'movie'}
      searchOptions={'year=none&sort_by=popularity.desc&with_keywords=9715'}
    />
    <HomeShowcase
      title={'Laugh out Loud'}
      discoverOption={'tv'}
      searchOptions={'year=none&sort_by=popularity.desc&with_genres=35'}
    />
    <HomeShowcase
      title={'Fantastic Fantasies'}
      discoverOption={'movie'}
      searchOptions={'year=none&sort_by=popularity.desc&with_genres=14'}
    />
    <HomeShowcase
      title={'Prime Time Crime Time'}
      discoverOption={'tv'}
      searchOptions={'year=none&sort_by=popularity.desc&with_genres=80'}
    />
    <HomeShowcase
      title={'Superior Sci-Fi'}
      discoverOption={'movie'}
      searchOptions={'year=none&sort_by=popularity.desc&with_genres=878'}
    />
  </React.Fragment>
);
