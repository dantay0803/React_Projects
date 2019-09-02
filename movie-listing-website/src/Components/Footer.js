import React from 'react';
import styled from 'styled-components';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Navbar } from 'react-bootstrap';

const Styles = styled.div`
  .navbar-text {
    color: var(--bert-gray);
    padding: 5rem 5rem 1rem 5rem;
  }

  .navbar-light .navbar-text a {
    color: white;
  }

  .navbar-light .navbar-text a:hover,
  .navbar-light .navbar-text a:active {
    color: var(--bert-gray);
  }

  .iconSpacing {
    padding-left: 0.5rem;
  }
`;

export default function Footer() {
  return (
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-start'>
          <Navbar.Text>
            Created By:{' '}
            <a
              href='https://danielt.co.uk/'
              target='_blank'
              rel='noopener noreferrer'>
              Daniel Taylor
            </a>
            <a
              href='https://twitter.com/dantay0803'
              target='_blank'
              rel='noopener noreferrer'
              className='iconSpacing'>
              <IoLogoTwitter />
            </a>
            <a
              href='https://github.com/dantay0803'
              target='_blank'
              rel='noopener noreferrer'
              className='iconSpacing'>
              <IoLogoGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/danielt0803/'
              target='_blank'
              rel='noopener noreferrer'
              className='iconSpacing'>
              <IoLogoLinkedin />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Search Powered By:{' '}
            <a
              href='https://www.themoviedb.org'
              target='_blank'
              rel='noopener noreferrer'>
              The Movie Database
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
