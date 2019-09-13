import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import BasicHeader from '../BasicHeader';
import castAndCrewHeader from '../../images/castAndCrewHeader.jpg';
import FullCastPersonItem from './FullCastPersonItem';

const Styles = styled.div`
  .container-fluid {
    padding: 0;
  }

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
          imagePath={castAndCrewHeader}
        />
        <Row className='crewListing'>
          <Col lg={{ span: 3, offset: 3 }}>
            <h4>Cast {cast !== null ? cast.cast.length : null}</h4>
            {cast !== null
              ? cast.cast.map((member, index) => (
                  <FullCastPersonItem
                    key={`${member.id}-${index}`}
                    id={member.id}
                    profilePath={member.profile_path}
                    name={member.name}
                    position={member.character}
                  />
                ))
              : null}
          </Col>
          <Col lg={{ span: 3 }}>
            <h4>Crew {cast !== null ? cast.crew.length : null}</h4>
            {cast !== null
              ? cast.crew.map((member, index) => (
                  <FullCastPersonItem
                    key={`${member.id}-${index}`}
                    id={member.id}
                    profilePath={member.profile_path}
                    name={member.name}
                    position={member.department}
                  />
                ))
              : null}
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
