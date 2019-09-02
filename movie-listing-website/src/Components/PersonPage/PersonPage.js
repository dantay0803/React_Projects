import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Media, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import config from '../../Config';
import profileFallback from '../../images/profileFallback.png';

const StyledContainer = styled(Container)`
  margin-top: 5rem;

  .header {
    border-bottom: 5px solid rgba(255, 255, 255, 1);
    margin-bottom: 2rem;
  }

  .media > .media-body > p {
    width: 75%;
  }

  .media > img {
    width: 18.75rem;
    height: 28.13rem;
    margin-bottom: 2rem;
  }

  .list-group {
    color: var(--bert-black);
  }
`;

export default function PersonPage(props) {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [personCredits, setPersonCredits] = useState(null);
  const { id } = props.match.params;

  let test;

  useEffect(() => {
    fetchDetails();
    fetchCredits();
  }, [id]);

  const fetchDetails = () => {
    fetch(`
      https://api.themoviedb.org/3/person/${id.replace('id=', '')}?api_key=${
      config.API_KEY_V3
    }`)
      .then(resp => resp.json())
      .then(data => {
        setPersonalInfo(data);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  };

  const fetchCredits = () => {
    fetch(`
    https://api.themoviedb.org/3/person/${id.replace(
      'id=',
      ''
    )}/combined_credits?api_key=${config.API_KEY_V3}`)
      .then(resp => resp.json())
      .then(data => {
        setPersonCredits(data);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  };

  return (
    <StyledContainer fluid>
      <Row className='header'>
        <Col lg={{ span: 8, offset: 2 }}>
          <Media>
            <img
              className='align-self-center mr-3'
              src={
                personalInfo !== null
                  ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${personalInfo.profile_path}`
                  : profileFallback
              }
              alt='Generic placeholder'
            />
            <Media.Body>
              {personalInfo !== null ? (
                <>
                  <h1>{personalInfo.name}</h1>
                  <h3>Biography</h3>
                  {personalInfo.biography.split('\n').map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </>
              ) : null}
            </Media.Body>
          </Media>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 3, offset: 2 }}>
          <h3>Personal Info</h3>
          {personalInfo !== null ? (
            <>
              <h4>Known For</h4>
              <p>{personalInfo.known_for_department}</p>
              <h4>Gender</h4>
              {personalInfo.gender === '1' ? <p>Female</p> : <p>Male</p>}
              <h4>Known Credits</h4>
              {personCredits !== null ? (
                <p>{personCredits.cast.length + personCredits.crew.length}</p>
              ) : null}
              <p></p>
              <h4>Birthday</h4>
              <p>{personalInfo.birthday}</p>
              <h4>Day of Death</h4>
              <p>{personalInfo.deathday}</p>
              <h4>Place of Birth</h4>
              <p>{personalInfo.place_of_birth}</p>
              <h4>Official Site</h4>
              <p>{personalInfo.homepage}</p>
              <h4>Also Known As</h4>
              <p>
                {personalInfo.also_known_as.map(name => (
                  <p>{name}</p>
                ))}
              </p>
            </>
          ) : null}
        </Col>
        <Col lg='5'>
          <ListGroup></ListGroup>
        </Col>
      </Row>
    </StyledContainer>
  );
}
