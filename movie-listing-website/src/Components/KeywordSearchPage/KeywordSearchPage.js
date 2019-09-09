import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import KeywordListItem from './KeywordListItem';
import config from '../../Config';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Media
} from 'react-bootstrap';


const Styles = styled.div`
  .container {
    margin-top: 5rem;
  }
`;

export default function KeywordSearchPage(props) {
  const [searchResults, setSearchResults] = useState(null);
  const { id, cat } = props.match.params;
  const url = props.match.url;

  useEffect(() => {
    if (url.includes('keyword')) {
      getResults('with_keywords');
    }
    else {
      getResults('with_genres');
    }
  }, [id, cat]);

  const getResults = (searchTerm) => {
    fetch(`https://api.themoviedb.org/3/discover/${cat}?api_key=${config.API_KEY_V3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&${searchTerm}=${id}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setSearchResults(data);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  }

  return (

    <Styles>
      <Container>
        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={{ span: 12, offet: 0 }}>
            {searchResults !== null ? searchResults.results.map(item => <KeywordListItem key={item.id}
              id={item.id}
              title={item.name || item.title}
              releaseDate={item.release_date || item.first_aired}
              description={item.overview}
              popularity={item.vote_average * 10}
              posterPath={item.poster_path}
              category={cat} />) : null}
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}
