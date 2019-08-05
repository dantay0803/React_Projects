import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import SearchResultItem from './SearchResultItem';
import config from '../../Config';
const axios = require('axios');

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
    border-color: var(--bert-blue-dark);
  }

  .active {
    border-color: var(--bert-blue-bright);
  }

  .searchInfo {
    color: var(--bert-gray);
    font-size: 0.75rem;
  }
`;

export default function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchOption, setSearchOption] = useState('movie');

  useEffect(() => {
    fetchData(searchOption);
  }, []);

  const fetchData = async category => {
    const results = await axios(
      `https://api.themoviedb.org/3/search/${category}?api_key=${
        config.API_KEY_V3
      }&query=Jack+Reacher`
    );
    console.log(results.data);
    setSearchResults(results.data);
  };

  const resultSelect = selection => {
    setSearchOption(selection);
    fetchData(selection);
  };

  return (
    <Styles>
      <Container>
        <Row>
          <Col sm={3}>
            <ListGroup defaultActiveKey='#movie'>
              <ListGroup.Item
                action
                href='#movie'
                onClick={e => {
                  e.preventDefault();
                  resultSelect('movie');
                }}>
                Movies
              </ListGroup.Item>
              <ListGroup.Item
                action
                href='#tv'
                onClick={e => {
                  e.preventDefault();
                  resultSelect('tv');
                }}>
                TV Shows
              </ListGroup.Item>
              <ListGroup.Item
                action
                href='#collection'
                onClick={e => {
                  e.preventDefault();
                  resultSelect('collection');
                }}>
                Collections
              </ListGroup.Item>
              <ListGroup.Item
                action
                href='#keyword'
                onClick={e => {
                  e.preventDefault();
                  resultSelect('keyword');
                }}>
                Keywords
              </ListGroup.Item>
              <ListGroup.Item
                action
                href='#person'
                onClick={e => {
                  e.preventDefault();
                  resultSelect('person');
                }}>
                People
              </ListGroup.Item>
              <ListGroup.Item
                action
                href='#company'
                onClick={e => {
                  e.preventDefault();
                  resultSelect('company');
                }}>
                Companies
              </ListGroup.Item>
              <ListGroup.Item
                action
                href='#network'
                onClick={e => {
                  e.preventDefault();
                  resultSelect('network');
                }}>
                Networks
              </ListGroup.Item>
            </ListGroup>
            <Row className='searchInfo'>
              <Col sm={1}>
                <FaInfoCircle />
              </Col>
              <Col sm={7}>
                Tip: You can use the 'y:' filter to narrow your results by year.
                Example: 'star wars y:1977'.
              </Col>
            </Row>
          </Col>
          <Col sm={9}>
            <h3 className='searchTitle'>Search > Collection Results</h3>
            {searchResults === null
              ? null
              : searchResults.results.map(item => {
                  switch (searchOption) {
                    case 'movie':
                    case 'tv':
                      return (
                        <SearchResultItem
                          key={item.id}
                          title={
                            searchOption === 'movie' ? item.title : item.name
                          }
                          releaseDate={
                            searchOption === 'movie'
                              ? item.release_date
                              : item.first_air_date
                          }
                          description={item.overview}
                          popularity={item.vote_average * 10}
                          posterPath={item.poster_path}
                        />
                      );
                      break;
                  }
                })}
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
