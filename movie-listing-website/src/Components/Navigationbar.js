import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Logo from '../images/logo.png';

const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.backgroundcolor || 'transparent'};
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -ms-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
`;

const Styles = styled.div`
  .navbar-brand,
  .navbar-light .navbar-nav .nav-link {
    color: #66fcf1;
  }

  .navbar-brand: hover,
  .navbar-light .navbar-nav .nav-link: hover {
    color: #45a29e;
  }
`;

export default class Navigationbar extends Component {
  constructor(props) {
    super(props);
  }

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
            <Form inline>
              <FormControl
                type='text'
                placeholder='Titles, people, genres'
                className='mr-sm-2'
              />
            </Form>
          </Navbar.Collapse>
        </StyledNavbar>
      </Styles>
    );
  }
}
