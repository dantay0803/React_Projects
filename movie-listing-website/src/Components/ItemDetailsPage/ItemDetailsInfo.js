import React from 'react';
import styled from 'styled-components';
import { Container, Card, Media, CardDeck, Col, Row } from 'react-bootstrap';
import UserReview from '../UserReview';
import CustomHR from '../CustomHR';
import Recommendations from './Recommendations';

const TopBilledCastCard = styled(Card)`
  color: var(--bert-black);
  max-width: 8.625rem;
  max-height: 15.56rem;
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

export default function ItemDetailsInfo(props) {
  const { id, category, topBilledCast, reviews, collection } = props;
  return (
    <>
      <Container>
        <h3>Top Billed Cast</h3>
        <CardDeck>
          {topBilledCast.map(cast => (
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
          ))}
        </CardDeck>
        <p className='mt-3'>Full Cast & Crew</p>
      </Container>
      <CustomHR />
      <Container>
        <h3>Reviews {reviews !== null ? reviews.total_results : '0'}</h3>
        {reviews !== null
          ? reviews.results
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
        <p className='mt-3'>Read All Reviews</p>
      </Container>
      <CustomHR />
      <Container>
        Media Most Popular Videos 3 Backdrops 17 Posters 105
      </Container>
      <CustomHR />
      {collection !== null ? (
        <>
          <Container>
            <h1>Part of the {collection.name}</h1>
          </Container>
          <CustomHR />
        </>
      ) : null}

      <Container>
        <h3>Recommendations</h3>
        <Recommendations category={category} id={id} />
      </Container>
    </>
  );
}
