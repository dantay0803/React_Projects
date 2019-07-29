import React, { Component } from 'react';
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

export default class Navigationbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchbarStatus: 0,
      searchbarWidth: '2.75rem',
      searchbarBackgroundColor: 'rgba(0, 0, 0, 0)',
      searchbarBorder: 'none',
      searchbarDisplay: 'none'
    };
  }

  toggleSearchBar = () => {
    let searchbarStatus;
    let searchbarBackgroundColor;
    let searchbarBorder;
    let searchbarDisplay;
    let searchbarWidth;

    if (this.state.searchbarStatus === 0) {
      searchbarStatus = 1;
      searchbarWidth = '25rem';
      searchbarBackgroundColor = 'rgba(0, 0, 0, 0.8)';
      searchbarBorder = '1px solid white';
      searchbarDisplay = 'block';
    } else {
      searchbarStatus = 0;
      searchbarWidth = '2.75rem';
      searchbarBackgroundColor = 'rgba(0, 0, 0, 0)';
      searchbarBorder = 'none';
      searchbarDisplay = 'none';
    }

    this.setState({
      searchbarStatus,
      searchbarWidth,
      searchbarBackgroundColor,
      searchbarBorder
    });

    setTimeout(() => this.setState({ searchbarDisplay }), 500);
  };

  render() {
    return (
      <Styles>
        <StyledNavbar
          expand='lg'
          fixed='top'
          backgroundcolor={this.props.backgroundcolor}>
          <Navbar.Brand href='#home'>
            <img
              alt='What to watch logo'
              src={Logo}
              width='33'
              height='30'
              className='d-inline-block align-top'
            />
            {' What to Watch...'}
          </Navbar.Brand>
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
              searchbarwidth={this.state.searchbarWidth}
              searchbarbackgroundcolor={this.state.searchbarBackgroundColor}
              searchbarborder={this.state.searchbarBorder}>
              <InputGroup.Prepend>
                <Button onClick={this.toggleSearchBar}>
                  <FaSearch />
                </Button>
              </InputGroup.Prepend>
              <StyledFormControl
                placeholder='Keywords, Titles, People, Genres...'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                searchbardisplay={this.state.searchbarDisplay}
              />
            </StyledInputGroup>
          </Navbar.Collapse>
        </StyledNavbar>
      </Styles>
    );
  }
}
