import React, { Component } from 'react';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import PickOfTheWeek from './Components/HomePage/PickOfTheWeek';
import HomeShowcase from './Components/HomePage/HomeShowcase';
import SearchResultsPage from './Components/SearchPage/SearchResultsPage';
import ItemDetailsPage from './Components/ItemDetailsPage/ItemDetailsPage';
import ReviewsPage from './Components/ReviewsPage/ReviewsPage';
import FullCastPage from './Components/FullCastPage/FullCastPage';
import TrailersPage from './Components/TrailersPage/TrailersPage';
import PersonPage from './Components/PersonPage/PersonPage';
import KeywordSearchPage from './Components/KeywordSearchPage/KeywordSearchPage';
import NoMatchPage from './Components/NoMatchPage/NoMatchPage';
import ScrollToTop from './Components/ScrollToTop';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuickSearchPage from './Components/QuickSearchPage/QuickSearchPage';
import CollectionDetailsPage from './Components/CollectionDetailsPage/CollectionDetailsPage';

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
          <ScrollToTop>
            <Navigationbar backgroundcolor={this.state.navBackgroundColor} />
            <Switch>
              <Route exact={true} path='/whattowatch/' component={Home} />
              <Route
                path='/whattowatch/searchresults/:query'
                component={SearchResultsPage}
              />
              <Route
                path='/whattowatch/details/:cat/:id'
                component={ItemDetailsPage}
              />
              <Route
                path='/whattowatch/reviews/:cat/:id'
                component={ReviewsPage}
              />
              <Route
                path='/whattowatch/cast/:cat/:id'
                component={FullCastPage}
              />
              <Route
                path='/whattowatch/trailers/:cat/:id'
                component={TrailersPage}
              />
              <Route path='/whattowatch/person/:id' component={PersonPage} />
              <Route
                path={[
                  '/whattowatch/keyword/:id/:cat',
                  '/whattowatch/genre/:id/:cat'
                ]}
                component={KeywordSearchPage}
              />
              <Route
                path='/whattowatch/quicksearch/:cat/:option'
                component={QuickSearchPage}
              />
              <Route
                path='/whattowatch/collection/:id'
                component={CollectionDetailsPage}
              />
              <Route component={NoMatchPage} />
            </Switch>
            <Footer />
          </ScrollToTop>
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
