import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Media
} from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import SearchResultItem from './SearchResultItem';
import CollectionResultItem from './CollectionResultItem';
import PersonResultItem from './PersonResultItem';
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

export default function SearchResultsPage(props) {
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTVResults] = useState([]);
  const [peopleResults, setPeopleResults] = useState([]);
  const [collectionResults, setCollectionResults] = useState([]);
  const [searchOption, setSearchOption] = useState('movie');
  const [searchResults, setSearchResults] = useState(null);
  const { query } = props.match.params;

  useEffect(() => {
    // fetchData(query.replace('query=', ''));
  }, []);

  const fetchData = async searchQuery => {
    await axios
      .all([multiSearch(searchQuery), collectionsSearch(searchQuery)])
      .then(
        axios.spread((multiResults, collectionResults) => {
          const tempMoviesResults = [];
          const tempTVResults = [];
          const tempPersonResults = [];
          multiResults.data.results.map(item => {
            switch (item.media_type) {
              case 'movie':
                tempMoviesResults.push(item);
                break;
              case 'tv':
                tempTVResults.push(item);
                break;
              case 'person':
                tempPersonResults.push(item);
                break;
              default:
                break;
            }
          });
          setCollectionResults(collectionResults.data.results);
          setPeopleResults(tempPersonResults);
          setTVResults(tempTVResults);
          setMovieResults(tempMoviesResults);
          setSearchResults(tempMoviesResults);
        })
      );
  };

  const resultSelect = selection => {
    switch (selection) {
      case 'movie':
        setSearchResults(movieResults);
        break;
      case 'tv':
        setSearchResults(tvResults);
        break;
      case 'collection':
        setSearchResults(collectionResults);
        break;
      case 'person':
        setSearchResults(peopleResults);
        break;
      default:
        break;
    }

    setSearchOption(selection);
  };

  const multiSearch = searchQuery => {
    return axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${
        config.API_KEY_V3
      }&query=${searchQuery}`
    );
  };

  const collectionsSearch = searchQuery => {
    return axios.get(
      `https://api.themoviedb.org/3/search/collection?api_key=${
        config.API_KEY_V3
      }&query=${searchQuery}`
    );
  };

  return (
    <Styles>
      <Container>
        <Row>
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item
                action
                active={searchOption === 'movie'}
                onClick={e => {
                  e.preventDefault();
                  resultSelect('movie');
                }}>
                Movies <span>{movieResults.length}</span>
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={searchOption === 'tv'}
                onClick={e => {
                  e.preventDefault();
                  resultSelect('tv');
                }}>
                TV Shows <span>{tvResults.length}</span>
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={searchOption === 'collection'}
                onClick={e => {
                  e.preventDefault();
                  resultSelect('collection');
                }}>
                Collections <span>{collectionResults.length}</span>
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={searchOption === 'person'}
                onClick={e => {
                  e.preventDefault();
                  resultSelect('person');
                }}>
                People <span>{peopleResults.length}</span>
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
            <h3 className='searchTitle'>Search > {searchOption} Results</h3>
            {searchResults === null
              ? null
              : searchResults.map(item => {
                  switch (searchOption) {
                    case 'movie':
                    case 'tv':
                      return (
                        <SearchResultItem
                          key={item.id}
                          id={item.id}
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
                          category={searchOption}
                        />
                      );
                    case 'collection':
                      return (
                        <CollectionResultItem
                          key={item.id}
                          id={item.id}
                          title={item.name}
                          backdropPath={item.backdrop_path}
                          category={'collection'}
                        />
                      );
                    case 'person':
                      return (
                        <PersonResultItem
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          info={item.details}
                          imagePath={item.image}
                          category={'person'}
                        />
                      );
                    default:
                      break;
                  }
                })}
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
