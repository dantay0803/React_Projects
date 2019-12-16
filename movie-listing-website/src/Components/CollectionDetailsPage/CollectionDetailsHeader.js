import React from 'react';
import styled from 'styled-components';
import { Row, Col, Media, Jumbotron } from 'react-bootstrap';

const Styles = styled.div`
  .jumbotronImage {
    background-image: url(${props => props.backdropPath});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    border-bottom: 5px solid rgba(255, 255, 255, 1);
    padding: 0;
    margin: 0;
  }

  .jumbotronColor {
    background-color: rgba(31, 40, 51, 0.9);
    min-height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const MainInfoMedia = styled(Media)`
  margin-top: 5rem;
  margin-left: 10rem;

  .media > h3,
  h4,
  h5,
  h6 {
    color: white;
  }

  .media-body {
    margin-top: 2.5rem;
  }

  img {
    width: 8rem;
    height: 12rem;
    margin-right: 3rem;
  }
`;

export default function CollectionDetailsHeader(props) {
  const {
    name,
    averageRating,
    numberOfMovies,
    backdropPath,
    posterPath
  } = props;

  return (
    <Styles
      backdropPath={`https://image.tmdb.org/t/p/original/${backdropPath}`}>
      <Jumbotron fluid className='jumbotronImage'>
        <Jumbotron fluid className='jumbotronColor'>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <MainInfoMedia>
                <img
                  src={
                    posterPath !== ''
                      ? `https://image.tmdb.org/t/p/original/${posterPath}`
                      : `https://via.placeholder.com/58x87?text=Image+not+available`
                  }
                  alt='Movie poster image'
                />
                <Media.Body>
                  <h3>{name}</h3>
                  <h5>Average Rating: {Math.round(averageRating * 10) / 10}</h5>
                  <h5>Number of Movies: {numberOfMovies}</h5>
                </Media.Body>
              </MainInfoMedia>
            </Col>
          </Row>
        </Jumbotron>
      </Jumbotron>
    </Styles>
  );
}
