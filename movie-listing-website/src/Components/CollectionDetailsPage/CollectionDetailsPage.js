import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import CollectionDetailsHeader from './CollectionDetailsHeader';
import SearchResultItem from '../SearchPage/SearchResultItem';
import config from '../../Config';

const Styles = styled.div`
  .container-fluid {
    padding: 0;
  }
  .details {
    margin-top: 3rem;
  }
`;

export default function CollectionDetailsPage(props) {
  const [collectionDetails, setCollectionDetails] = useState(null);
  const [averageRating, setAverageRating] = useState('N/A');

  const { id } = props.match.params;

  useEffect(() => {
    const fetchDetails = () => {
      fetch(`
        https://api.themoviedb.org/3/collection/${id}?api_key=${config.API_KEY_V3}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          setCollectionDetails(data);
          calulateAverageRating(data.parts);
        })
        .catch(err => console.error(`Could not fetch data - Error: ${err}`));
    };

    fetchDetails();
  }, []);

  const calulateAverageRating = results => {
    let sum = 0;
    let validRating = 0;

    results.map(item => {
      if (item.vote_average > 0) {
        sum += item.vote_average;
        validRating += 1;
      }
    });

    setAverageRating(sum / validRating);
  };

  return (
    <Styles
      backdropPath={
        collectionDetails !== null
          ? `https://image.tmdb.org/t/p/original/${collectionDetails.backdrop_path}`
          : ''
      }>
      <Container fluid>
        <CollectionDetailsHeader
          name={collectionDetails !== null ? collectionDetails.name : ''}
          averageRating={averageRating}
          numberOfMovies={
            collectionDetails !== null ? collectionDetails.parts.length : 'N/A'
          }
          backdropPath={
            collectionDetails !== null ? collectionDetails.backdrop_path : ''
          }
          posterPath={
            collectionDetails !== null ? collectionDetails.poster_path : ''
          }
        />

        <Row className='details'>
          <Col lg={{ span: 6, offset: 3 }}>
            <h5>Overview</h5>
            <p>
              {collectionDetails !== null
                ? collectionDetails.overview
                : 'No overview available'}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <h5>Movies</h5>
            {collectionDetails === null
              ? null
              : collectionDetails.parts.map(item => (
                  <SearchResultItem
                    id={item.id}
                    title={item.title || item.name}
                    releaseDate={item.release_date || item.first_air_date}
                    description={item.overview}
                    popularity={item.vote_average * 10}
                    posterPath={item.poster_path}
                    category={'movie'}
                  />
                ))}
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
