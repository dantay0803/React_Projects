import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Media, CardDeck } from 'react-bootstrap';
import UserReview from '../UserReview';
import { withRouter, Link } from 'react-router-dom';
import config from '../../Config';

const Styles = styled.div`
  margin-top: 5rem;

  .pageHeader {
    border-bottom: 5px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 1rem;
  }

  .crewListing {
    margin-top: 2rem;
  }

  .media {
    margin-bottom: 1rem;
  }
`;

function FullCastPage(props) {
  const { cat, id } = props.match.params;
  const { cast, posterPath } = props.location.state || {
    cast: null,
    posterPath: ''
  };

  console.log(cast);
  return (
    <Styles>
      <Container fluid>
        <Row className='pageHeader'>
          <Col lg={{ span: 8, offset: 3 }}>
            <Media>
              <img
                width={58}
                height={87}
                className='align-self-center mr-3'
                src={`https://image.tmdb.org/t/p/original/${posterPath}`}
                alt='Generic placeholder'
              />
              <Media.Body>
                <h4>Spider-Man: Far from Home (2019)</h4>
                <Link onClick={() => props.history.goBack()}>
                  <p className='mt-3'>Back to details</p>
                </Link>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <Row className='crewListing'>
          <Col lg={{ span: 3, offset: 3 }}>
            <h4>Cast {cast !== null ? cast.cast.length : null}</h4>
            {cast !== null
              ? cast.cast.map(member => (
                  <Media>
                    <img
                      width={58}
                      height={87}
                      className='align-self-center mr-3'
                      src={`https://image.tmdb.org/t/p/original/${
                        member.profile_path
                      }`}
                      alt='Generic placeholder'
                    />
                    <Media.Body>
                      <h6>{member.name}</h6>
                      <p>{member.character}</p>
                    </Media.Body>
                  </Media>
                ))
              : null}
          </Col>
          <Col lg={{ span: 3 }}>
            <h4>Cast {cast !== null ? cast.crew.length : null}</h4>
            {cast !== null
              ? cast.crew.map(member => (
                  <Media>
                    <img
                      width={58}
                      height={87}
                      className='align-self-center mr-3'
                      src={`https://image.tmdb.org/t/p/original/${
                        member.profile_path
                      }`}
                      alt='Generic placeholder'
                    />
                    <Media.Body>
                      <h6>{member.name}</h6>
                      <p>{member.department}</p>
                    </Media.Body>
                  </Media>
                ))
              : null}
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default withRouter(FullCastPage);
