import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Logo from '../images/logo.png';

const Styles = styled.div`
  .navbar {
    background-color: transparent;
  }

  .navbar-brand,
  .navbar-light .navbar-nav .nav-link {
    color: white;
  }
`;

export default class Navigationbar extends Component {
  render() {
    return (
      <Styles>
        <Navbar expand='lg' fixed='top'>
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
        </Navbar>
      </Styles>
    );
  }
}
