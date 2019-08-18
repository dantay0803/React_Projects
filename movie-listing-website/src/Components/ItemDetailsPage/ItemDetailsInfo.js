import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Card,
  Media,
  CardDeck,
  Col,
  Row,
  Button
} from 'react-bootstrap';
import UserReview from '../UserReview';
import CustomHR from '../CustomHR';
import Recommendations from './Recommendations';

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

export default function ItemDetailsInfo(props) {
  const { id, category, topBilledCast, reviews, collection } = props;
  return (
    <>
      <Container>
        <h4>Top Billed Cast</h4>
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
        <h4>Reviews {reviews !== null ? reviews.total_results : '0'}</h4>
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
        <Recommendations category={category} id={id} />
      </Container>
    </>
  );
}
