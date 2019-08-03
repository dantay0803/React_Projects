import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

const DetailsNav = styled(Nav)`
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  font-size: 1.25rem;

  .nav-link {
    margin-left: 1rem;
    margin-right: 1rem;
    color: white;
  }

  .nav-link: hover {
    color: var(--bert-gray);
  }
`;

export default function ItemDetailsNavbar() {
  return (
    <DetailsNav className='justify-content-center' activeKey='/home'>
      <Nav.Item>
        <Nav.Link href='/home'>Discussions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-1'>Reviews</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Videos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Images</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Changes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Report</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Share</Nav.Link>
      </Nav.Item>
    </DetailsNav>
  );
}
