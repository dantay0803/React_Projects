import React from 'react';
import styled from 'styled-components';
import { Container, Card, Media, CardDeck, Col, Row } from 'react-bootstrap';
import UserDiscussionLink from '../UserDiscussionLink';
import UserReview from '../UserReview';
import CustomBadge from '../CustomBadge';
import CutsomHR from '../CutsomHR';
import topBilledCastPlaceholder from '../../images/topBilledCastPlaceholder.jpg';

const TopBilledCastCard = styled(Card)`
  color: var(--bert-black);
  width: 138px;
  height: 249px;
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
  }
`;

export default function ItemDetailsInfo() {
  return (
    <>
      <Container>
        <h1>Top Billed Cast</h1>
        <CardDeck>
          <TopBilledCastCard>
            <Card.Img variant='top' src={topBilledCastPlaceholder} />
            <Card.Body>
              <Card.Title>
                <strong>Jon Favreau</strong>
              </Card.Title>
              <Card.Text>Harold "Happy" Hogan</Card.Text>
            </Card.Body>
          </TopBilledCastCard>
          <TopBilledCastCard>
            <Card.Img variant='top' src={topBilledCastPlaceholder} />
            <Card.Body>
              <Card.Title>
                <strong>Jon Favreau</strong>
              </Card.Title>
              <Card.Text>Harold "Happy" Hogan</Card.Text>
            </Card.Body>
          </TopBilledCastCard>
          <TopBilledCastCard>
            <Card.Img variant='top' src={topBilledCastPlaceholder} />
            <Card.Body>
              <Card.Title>
                <strong>Jon Favreau</strong>
              </Card.Title>
              <Card.Text>Harold "Happy" Hogan</Card.Text>
            </Card.Body>
          </TopBilledCastCard>
          <TopBilledCastCard>
            <Card.Img variant='top' src={topBilledCastPlaceholder} />
            <Card.Body>
              <Card.Title>
                <strong>Jon Favreau</strong>
              </Card.Title>
              <Card.Text>Harold "Happy" Hogan</Card.Text>
            </Card.Body>
          </TopBilledCastCard>
          <TopBilledCastCard>
            <Card.Img variant='top' src={topBilledCastPlaceholder} />
            <Card.Body>
              <Card.Title>
                <strong>Jon Favreau</strong>
              </Card.Title>
              <Card.Text>Harold "Happy" Hogan</Card.Text>
            </Card.Body>
          </TopBilledCastCard>
        </CardDeck>
        <p className='mt-3'>Full Cast & Crew</p>
      </Container>
      <CutsomHR />
      <Container>
        Social Reviews 8 Discussions 71
        {/* <UserReview />
        <UserReview />
        <UserReview /> */}
        <UserDiscussionLink />
        <UserDiscussionLink />
        <UserDiscussionLink />
        <p className='mt-3'>Read All Reviews</p>
      </Container>
      <Container>
        Media Most Popular Videos 3 Backdrops 17 Posters 105
      </Container>
      <CutsomHR />
    </>
  );
}
