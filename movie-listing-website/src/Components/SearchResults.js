import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import SearchResultItem from './SearchResultItem';

const Styles = styled.div`
  .container {
    margin-top: 5rem;
  }
`;

export default class SearchResults extends Component {
  render() {
    return (
      <Styles>
        <Container>
          <Row>
            <Col sm={4}>
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
            </Col>
            <Col sm={8}>
              <h3>Search > Collection Results</h3>
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
