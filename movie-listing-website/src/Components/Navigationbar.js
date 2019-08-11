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
import { Link } from 'react-router-dom';
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
`;

export default function Navigationbar(props) {
  const [searchbarStatus, setSearchbarStatus] = useState(0);
  const [searchbarWidth, setSearchbarWidth] = useState('2.75rem');
  const [searchbarBackgroundColor, setSearchbarBackgroundColor] = useState(
    'rgba(0, 0, 0, 0)'
  );
  const [searchbarBorder, setSearchbarBorder] = useState('none');
  const [searchbarDisplay, setSearchbarDisplay] = useState('none');

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
    }

    setTimeout(() => setSearchbarDisplay(updatedSearchbarDisplay), 500);
  };

  return (
    <Styles>
      <StyledNavbar
        expand='lg'
        fixed='top'
        backgroundcolor={props.backgroundcolor}>
        <Link to='/'>
          <Navbar.Brand>
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
            <Nav.Link href='#home'>Home</Nav.Link>
            <NavDropdown title='Series' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Films' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#home'>Recently Added</Nav.Link>
            <Nav.Link href='#home'>My List</Nav.Link>
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
              aria-label="Recipient's username"
              aria-describedby='basic-addon2'
              searchbardisplay={searchbarDisplay}
            />
          </StyledInputGroup>
        </Navbar.Collapse>
      </StyledNavbar>
    </Styles>
  );
}
