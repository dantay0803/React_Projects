import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import UserReview from '../UserReview';
import BasicHeader from '../BasicHeader';

const Styles = styled.div`
  margin-top: 5rem;
`;

export default function ReviewsPage(props) {
  const { reviewsResults, posterPath } = props.location.state || {
    reviewsResults: null,
    posterPath: ''
  };
  return (
    <Styles>
      <Container fluid>
        <BasicHeader
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
