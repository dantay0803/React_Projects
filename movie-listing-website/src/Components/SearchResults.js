import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import SearchResultItem from './SearchResultItem';

const Styles = styled.div`
  .container {
    margin-top: 5rem;
  }

  .searchTitle {
    color: white;
  }

  .col-sm-4 {
    padding: 0;
    margin: 0;
  }

  .list-group-item {
    background-color: transparent;
    border: 2px solid white;
    border-top: none;
    border-right: none;
    color: white;
    margin-bottom: 1rem;
    width: 10rem;
    margin-right: 0;
    padding-right: 0;
  }

  .list-group-item: hover {
    border-color: var(--bert-blue-bright);
  }

  .searchInfo {
    color: var(--bert-gray);
    font-size: 0.75rem;
  }
`;

export default class SearchResults extends Component {
  render() {
    return (
      <Styles>
        <Container>
          <Row>
            <Col sm={3}>
              <ListGroup>
                <ListGroup.Item action href='#link1'>
                  Movies
                </ListGroup.Item>
                <ListGroup.Item action href='#link2'>
                  TV Shows
                </ListGroup.Item>
                <ListGroup.Item action href='#link2'>
                  Collections
                </ListGroup.Item>
                <ListGroup.Item action href='#link2'>
                  Keywords
                </ListGroup.Item>
                <ListGroup.Item action href='#link2'>
                  People
                </ListGroup.Item>
                <ListGroup.Item action href='#link2'>
                  Companies
                </ListGroup.Item>
                <ListGroup.Item action href='#link2'>
                  Networks
                </ListGroup.Item>
              </ListGroup>
              <Row className='searchInfo'>
                <Col sm={1}>
                  <FaInfoCircle />
                </Col>
                <Col sm={7}>
                  Tip: You can use the 'y:' filter to narrow your results by
                  year. Example: 'star wars y:1977'.
                </Col>
              </Row>
            </Col>
            <Col sm={9}>
              <h3 className='searchTitle'>Search > Collection Results</h3>
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}
