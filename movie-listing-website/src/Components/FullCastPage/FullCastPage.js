import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BasicHeader from '../BasicHeader';
import profileFallback from '../../images/profileFallback.png';

const Styles = styled.div`
  margin-top: 5rem;
  .crewListing {
    margin-top: 2rem;
  }

  .media {
    margin-bottom: 1rem;
  }
`;

export default function FullCastPage(props) {
  const { title, releaseYear, cast, posterPath } = props.location.state || {
    title: null,
    releaseYear: null,
    cast: null,
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
        <Row className='crewListing'>
          <Col lg={{ span: 3, offset: 3 }}>
            <h4>Cast {cast !== null ? cast.cast.length : null}</h4>
            {cast !== null
              ? cast.cast.map(member => (
                  <Media key={member.id}>
                    <Link to={`/person/${member.id}`}>
                      <img
                        width={58}
                        height={87}
                        className='align-self-center mr-3'
                        src={
                          member.profile_path !== null
                            ? `https://image.tmdb.org/t/p/original/${member.profile_path}`
                            : profileFallback
                        }
                        alt='Generic placeholder'
                      />
                    </Link>
                    <Media.Body>
                      <Link to={`/person/${member.id}`}>
                        <h6>{member.name}</h6>
                      </Link>
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
                  <Media key={member.id}>
                    <Link to={`/person/${member.id}`}>
                      <img
                        width={58}
                        height={87}
                        className='align-self-center mr-3'
                        src={
                          member.profile_path !== null
                            ? `https://image.tmdb.org/t/p/original/${member.profile_path}`
                            : profileFallback
                        }
                        alt='Generic placeholder'
                      />
                    </Link>
                    <Media.Body>
                      <Link to={`/person/${member.id}`}>
                        <h6>{member.name}</h6>
                      </Link>
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
