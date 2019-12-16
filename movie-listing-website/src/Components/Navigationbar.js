import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Navbar,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../images/logo.png';

const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.backgroundcolor || 'transparent'};
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -ms-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
`;

const StyledInputGroup = styled(InputGroup)`
  width: ${props => props.searchbarwidth || '2.75rem'};
  background-color: ${props =>
    props.searchbarbackgroundcolor || 'rgba(0, 0, 0, 0)'};
  border: ${props => props.searchbarborder || 'none'};
  -webkit-transition: width 1s ease-in-out, background 1s ease-in-out;
  transition: width 1s ease-in-out, background 1s ease-in-out;
`;

const StyledFormControl = styled(FormControl)`
  display: ${props => props.searchbardisplay || 'none'};
  -webkit-transition: display 1s ease-in-out;
  transition: display 1s ease-in-out;
`;

const Styles = styled.div`
  .navbar-brand,
  .navbar-light .navbar-nav .nav-link {
    color: var(--bert-blue-bright);
  }

  .navbar-brand: hover,
  .navbar-light .navbar-nav .nav-link: hover {
    color: var(--bert-blue-dark);
  }

  .btn,
  .form-control {
    background-color: transparent;
    border: none;
    color: white;
  }

  .dropdown-item {
    color: var(--bert-gray);
  }

  .dropdown-item: hover {
    color: var(--bert-blue-dark);
    background-color: none;
  }
`;

function Navigationbar(props) {
  const [searchbarStatus, setSearchbarStatus] = useState(0);
  const [searchbarWidth, setSearchbarWidth] = useState('2.75rem');
  const [searchbarBackgroundColor, setSearchbarBackgroundColor] = useState(
    'rgba(0, 0, 0, 0)'
  );
  const [searchbarBorder, setSearchbarBorder] = useState('none');
  const [searchbarDisplay, setSearchbarDisplay] = useState('none');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearchBar = () => {
    let updatedSearchbarDisplay;

    if (searchbarStatus === 0) {
      setSearchbarStatus(1);
      setSearchbarWidth('25rem');
      setSearchbarBackgroundColor('rgba(0, 0, 0, 0.8)');
      setSearchbarBorder('1px solid white');
      updatedSearchbarDisplay = 'block';
    } else {
      setSearchbarStatus(0);
      setSearchbarWidth('2.75rem');
      setSearchbarBackgroundColor('rgba(0, 0, 0, 0)');
      setSearchbarBorder('none');
      updatedSearchbarDisplay = 'none';
      setSearchInputValue('');
    }

    setTimeout(() => setSearchbarDisplay(updatedSearchbarDisplay), 500);
  };

  const closeSearchBar = () => {
    let updatedSearchbarDisplay;

    if (searchbarStatus === 1) {
      setSearchbarStatus(0);
      setSearchbarWidth('2.75rem');
      setSearchbarBackgroundColor('rgba(0, 0, 0, 0)');
      setSearchbarBorder('none');
      updatedSearchbarDisplay = 'none';
    }

    setTimeout(() => setSearchbarDisplay(updatedSearchbarDisplay), 500);
  };

  const searchInput = e => {
    e.preventDefault();

    if (e.key === 'Enter') {
      props.history.push(`/whattowatch/searchresults/query=${searchQuery}`);
    } else {
      setSearchInputValue(e.target.value);
      setSearchQuery(e.target.value.replace(/\s/g, '%20'));
    }
  };

  const goToQuckSearch = (option, searchName) => {
    props.history.push({
      pathname: `/whattowatch/quicksearch/${option}`,
      state: { searchName }
    });
  };

  return (
    <Styles>
      <StyledNavbar
        expand='lg'
        fixed='top'
        backgroundcolor={props.backgroundcolor}>
        <Link to='/whattowatch/'>
          <Navbar.Brand onClick={() => closeSearchBar()}>
            <img
              alt='What to watch logo'
              src={Logo}
              width='33'
              height='30'
              className='d-inline-block align-top'
            />
            {' What to Watch...'}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown
              title='Discover'
              id='discover-quicksearch-option'
              onClick={() => closeSearchBar()}>
              <NavDropdown.Item
                onClick={() =>
                  goToQuckSearch('discover/movie', 'Discover Movies')
                }>
                Movies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => goToQuckSearch('discover/tv', 'Discover TV')}>
                TV
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title='Films'
              id='movie-quicksearch-options'
              onClick={() => closeSearchBar()}>
              <NavDropdown.Item
                onClick={() =>
                  goToQuckSearch('movie/popular', 'Popular Movies')
                }>
                Popular
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() =>
                  goToQuckSearch('movie/top_rated', 'Top Rated Movies')
                }>
                Top Rated
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() =>
                  goToQuckSearch('movie/upcoming', 'Up & Coming Movies')
                }>
                Up & Coming
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() =>
                  goToQuckSearch('movie/now_playing', 'Now Playing Movies')
                }>
                Now Playing
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title='Series'
              id='tv-quicksearch-options'
              onClick={() => closeSearchBar()}>
              <NavDropdown.Item
                onClick={() => goToQuckSearch('tv/popular', 'Popular TV')}>
                Popular
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => goToQuckSearch('tv/top_rated', 'Top Rated TV')}>
                Top Rated
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => goToQuckSearch('tv/on_the_air', 'On TV')}>
                On TV
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  goToQuckSearch('tv/airing_today', 'TV Airing Today')
                }>
                Airing Today
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <StyledInputGroup
            searchbarwidth={searchbarWidth}
            searchbarbackgroundcolor={searchbarBackgroundColor}
            searchbarborder={searchbarBorder}>
            <InputGroup.Prepend>
              <Button onClick={() => toggleSearchBar()}>
                <FaSearch />
              </Button>
            </InputGroup.Prepend>
            <StyledFormControl
              placeholder='Keywords, Titles, People, Genres...'
              aria-label='Search entry'
              aria-describedby='basic-addon2'
              searchbardisplay={searchbarDisplay}
              value={searchInputValue}
              onChange={e => searchInput(e)}
              onKeyUp={e => searchInput(e)}
            />
          </StyledInputGroup>
        </Navbar.Collapse>
      </StyledNavbar>
    </Styles>
  );
}

export default withRouter(Navigationbar);
