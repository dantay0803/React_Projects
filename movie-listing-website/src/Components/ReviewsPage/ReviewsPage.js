import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import UserReview from '../UserReview';
import BasicHeader from '../BasicHeader';

const Styles = styled.div`
  margin-top: 5rem;
`;

export default function ReviewsPage(props) {
  const { title, releaseYear, reviewsResults, posterPath } = props.location
    .state || {
    title: null,
    releaseYear: null,
    reviewsResults: null,
    posterPath: ''
  };
  return (
    <Styles>
      <Container fluid>
        <BasicHeader
          title={title}
          releaseYear={releaseYear}
          posterPath={posterPath}
          navigateBack={props.history.goBack}
        />
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
