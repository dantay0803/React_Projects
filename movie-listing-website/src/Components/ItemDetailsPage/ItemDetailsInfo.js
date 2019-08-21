import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Container,
  Card,
  Media,
  CardDeck,
  Col,
  Row,
  Button,
  Carousel
} from 'react-bootstrap';
import UserReview from '../UserReview';
import CustomHR from '../CustomHR';
import Recommendations from './Recommendations';
import { Link } from 'react-router-dom';
import config from '../../Config';
import YouTubePlayer from '../YouTubePlayer';
const TopBilledCastCard = styled(Card)`
  color: var(--bert-black);
  max-width: 8.625rem;
  max-height: 17.56rem;
  border: none;
  border-radius: 0;
  font-size: 0.8rem;
  overflow: hidden;

  .card-body {
    padding: 0.5rem;
  }

  .card-title {
    font-size: 0.9rem;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  img {
    border-radius: 0;
    width: 8.625rem;
    height: 10.94rem;
    padding: 0;
    margin: 0;
  }
`;

const CollectionsCard = styled(Card)`
  border: none;

  .card-title {
  }

  .card-img-overlay {
    background-color: rgba(31, 40, 51, 0.8);
  }

  .card-img-overlay > h5 {
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  .card-img-overlay > button {
    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 25px;
    height: 50px;
    font-weight: bold;
  }
  .card-img-overlay > button:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(255, 255, 255, 1);
    color: var(--bert-black);
  }
`;

const StyledCarousel = styled(Carousel)`
  .carousel-inner > .carousel-item > img {
    margin: 0 auto;
  }
`;

export default function ItemDetailsInfo(props) {
  const [reviewsResults, setReviewsResults] = useState(null);
  const [trailerResults, setTrailerResults] = useState(null);
  const { id, cat, cast, collection, posterPath } = props;

  useEffect(() => {
    fetchReviews();
    fetchTrailers();
  }, []);

  const fetchReviews = () => {
    fetch(`
      https://api.themoviedb.org/3/${cat}/${id.replace(
      'id=',
      ''
    )}/reviews?api_key=${config.API_KEY_V3}`)
      .then(resp => resp.json())
      .then(data => {
        setReviewsResults(data);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  };

  const fetchTrailers = () => {
    fetch(`
      https://api.themoviedb.org/3/${cat}/${id.replace(
      'id=',
      ''
    )}/videos?api_key=${config.API_KEY_V3}`)
      .then(resp => resp.json())
      .then(data => {
        setTrailerResults(data);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  };

  return (
    <>
      <Container>
        <h4>Top Billed Cast</h4>
        <CardDeck>
          {cast !== null
            ? cast.cast.slice(0, 5).map(cast => (
                <TopBilledCastCard key={cast.id}>
                  <Card.Img
                    variant='top'
                    src={`https://image.tmdb.org/t/p/w138_and_h175_face/${
                      cast.profile_path
                    }`}
                  />
                  <Card.Body>
                    <Card.Title>
                      <strong>{cast.name}</strong>
                    </Card.Title>
                    <Card.Text>{cast.character}</Card.Text>
                  </Card.Body>
                </TopBilledCastCard>
              ))
            : null}
        </CardDeck>
        <Link
          to={{
            pathname: `/cast/${props.cat}/id=${props.id}`,
            state: { cast, posterPath }
          }}>
          <p className='mt-3'>Full Cast & Crew</p>
        </Link>
      </Container>
      <CustomHR />
      <Container>
        <h4>
          Reviews {reviewsResults !== null ? reviewsResults.total_results : '0'}
        </h4>
        {reviewsResults !== null
          ? reviewsResults.results
              .slice(0, 3)
              .map(review => (
                <UserReview
                  key={review.id}
                  id={review.id}
                  author={review.author}
                  content={`${review.content.substring(0, 120)}...`}
                />
              ))
          : null}
        <Link
          to={{
            pathname: `/reviews/${props.cat}/id=${props.id}`,
            state: { reviewsResults, posterPath }
          }}>
          <p className='mt-3'>Read All Reviews</p>
        </Link>
      </Container>
      <CustomHR />
      <Container>
        <h4>Trailers</h4>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <StyledCarousel controls={false}>
              {trailerResults !== null
                ? trailerResults.results.map(trailer => (
                    <Carousel.Item key={trailer.id}>
                      <img
                        className='d-block'
                        src={`https://i.ytimg.com/vi/${
                          trailer.key
                        }/hqdefault.jpg`}
                        alt={`${trailer.name} - trailer`}
                      />
                    </Carousel.Item>
                  ))
                : null}
            </StyledCarousel>
          </Col>
        </Row>
        <Link
          to={{
            pathname: `/trailers/${props.cat}/id=${props.id}`,
            state: null
          }}>
          <p className='mt-3'>View All Trailers</p>
        </Link>
      </Container>
      <CustomHR />
      {collection !== null ? (
        <>
          <Container>
            <CollectionsCard>
              <Card.Img
                src={`https://image.tmdb.org/t/p/w1440_and_h320_bestv2/${
                  collection.backdrop_path
                }`}
                alt='Card image'
              />
              <Card.ImgOverlay>
                <h5>Part of the {collection.name}</h5>
                <Button>VIEW THE COLLECTION</Button>
              </Card.ImgOverlay>
            </CollectionsCard>
          </Container>
          <CustomHR />
        </>
      ) : null}

      <Container>
        <h4>Recommendations</h4>
        <Recommendations cat={props.cat} id={id} />
        <YouTubePlayer />
      </Container>
    </>
  );
}
