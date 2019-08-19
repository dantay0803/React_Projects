import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Media, CardDeck } from 'react-bootstrap';
import UserReview from '../UserReview';
import { withRouter, Link } from 'react-router-dom';
import config from '../../Config';

const Styles = styled.div`
  margin-top: 5rem;
`;

function ReviewsPage(props) {
  const { cat, id } = props.match.params;
  const { reviewsResults, posterPath } = props.location.state || {
    reviewsResults: null,
    posterPath: ''
  };
  return (
    <Styles>
      <Container fluid>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Media>
              <img
                width={58}
                height={87}
                className='align-self-start mr-3'
                src={`https://image.tmdb.org/t/p/original/${posterPath}`}
                alt='Generic placeholder'
              />
              <Media.Body>
                <h4>Reviews - Spider-Man: Far from Home (2019)</h4>
                <Link onClick={() => props.history.goBack()}>
                  <p className='mt-3'>Back to details</p>
                </Link>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            {reviewsResults !== null
              ? reviewsResults.results.map(review => (
                  <UserReview
                    key={review.id}
                    id={review.id}
                    author={review.author}
                    content={review.content}
                  />
                ))
              : null}
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default withRouter(ReviewsPage);
