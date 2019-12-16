import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Media,
  ListGroup,
  Tab,
  Card,
  CardDeck
} from 'react-bootstrap';
import styled from 'styled-components';
import config from '../../Config';
import profileFallback from '../../images/profileFallback.png';
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)`
  margin-top: 5rem;

  .header {
    border-bottom: 5px solid rgba(255, 255, 255, 1);
    margin-bottom: 2rem;
  }

  .list-group {
    color: var(--bert-black);
  }
`;

const PersonHeaderMedia = styled(Media)`
  width: 100%;

  .media-body > p {
    width: 75%;
  }

  img {
    width: 18.75rem;
    height: 28.13rem;
    margin-bottom: 2rem;
  }
`;

const KnownForCardDeck = styled(CardDeck)`
  text-decoration: none;

  .card {
    margin: 1rem;
    width: 9.375rem;
    height: 19.38rem;
  }

  .card > img {
    height: 14.06rem;
  }

  .card-title {
    text-align: center;
    font-weight: bold;
    font-size: 0.95rem;
    margin: 0;
    margin-top: 0.25rem;
    overflow: hidden;
    color: var(--bert-black);
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
`;

const CategorySwitchListGroup = styled(ListGroup)`
  margin-top: 5rem;
  margin-bottom: 1rem;

  .list-group-item {
    height: 3.125rem;
    width: 9.375rem;
    background-color: var(--bert-blue-dark);
    color: white;
  }

  .list-group-item.active {
    background-color: var(--bert-blue-bright);
    color: var(--bert-black);
    border-color: var(--bert-blue-bright);
  }
`;

const CreditListGroup = styled(ListGroup)`
  margin-bottom: 3rem;
  min-width: 650px;
`;

export default function PersonPage(props) {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [personCredits, setPersonCredits] = useState(null);
  const [totalCredits, setTotalCredits] = useState(null);
  const [orderedActorMovies, setOrderedActorMovies] = useState(null);
  const [orderedActorTV, setOrderedActorTV] = useState(null);
  const [orderedCrewMovies, setOrderedCrewMovies] = useState(null);
  const [orderedCrewTV, setOrderedCrewTV] = useState(null);

  const { id } = props.match.params;

  useEffect(() => {
    const fetchDetails = () => {
      fetch(`
        https://api.themoviedb.org/3/person/${id.replace('id=', '')}?api_key=${
        config.API_KEY_V3
      }`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
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
          console.log(data);

          setPersonCredits(data);
          orderCredits(data);

          const totalCredits = [];

          data.cast.map(item =>
            !totalCredits.includes(item.title || item.name)
              ? totalCredits.push(item.title || item.name)
              : null
          );
          data.crew.map(item =>
            !totalCredits.includes(item.title || item.name)
              ? totalCredits.push(item.title || item.name)
              : null
          );

          setTotalCredits(totalCredits.length);
        })
        .catch(err => console.error(`Could not fetch data - Error: ${err}`));
    };

    fetchDetails();
    fetchCredits();
  }, [id]);

  const orderCredits = data => {
    let orderedActorMovies = [];
    let orderedActorTV = [];

    data.cast.map(item => {
      if (item.media_type === 'movie') {
        orderedActorMovies.push({
          date: new Date(item.release_date).getFullYear().toString(),
          title: item.title,
          character: item.character,
          id: item.id,
          media_type: item.media_type
        });
      }

      if (item.media_type === 'tv') {
        orderedActorTV.push({
          date: new Date(item.first_air_date).getFullYear().toString(),
          title: item.name,
          character: item.character,
          id: item.id,
          media_type: item.media_type
        });
      }
    });

    setOrderedActorMovies(
      orderedActorMovies
        .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
        .reverse()
    );

    setOrderedActorTV(
      orderedActorTV
        .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
        .reverse()
    );

    let orderedCrewMovies = [];
    let orderedCrewTV = [];

    data.crew.map(item => {
      if (item.media_type === 'movie') {
        orderedCrewMovies.push({
          date: new Date(item.release_date).getFullYear().toString(),
          title: item.title,
          department: item.department,
          id: item.id,
          media_type: item.media_type
        });
      }

      if (item.media_type === 'tv') {
        orderedCrewTV.push({
          date: new Date(item.first_air_date).getFullYear().toString(),
          title: item.name,
          department: item.department,
          id: item.id,
          media_type: item.media_type
        });
      }
    });

    setOrderedCrewMovies(
      orderedCrewMovies
        .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
        .reverse()
    );

    setOrderedCrewTV(
      orderedCrewTV
        .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
        .reverse()
    );
  };

  return (
    <StyledContainer fluid>
      <Row className='header'>
        <Col lg={{ span: 8, offset: 2 }}>
          <PersonHeaderMedia>
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
                  {personalInfo.biography !== undefined
                    ? personalInfo.biography
                        .split('\n')
                        .map((text, i) => <p key={i}>{text}</p>)
                    : 'No biography available'}
                </>
              ) : null}
            </Media.Body>
          </PersonHeaderMedia>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 3, offset: 2 }}>
          <h3>Personal Info</h3>
          {personalInfo !== null ? (
            <>
              <h5>Known For</h5>
              <p>{personalInfo.known_for_department}</p>
              <h5>Gender</h5>
              {personalInfo.gender === '1' ? <p>Female</p> : <p>Male</p>}
              <h5>Known Credits</h5>
              {totalCredits !== null ? <p>{totalCredits}</p> : null}
              <p></p>
              <h4>Birthday</h4>
              <p>{personalInfo.birthday}</p>
              {personalInfo.deathday !== null ? (
                <>
                  <h5>Day of Death</h5>
                  <p>{personalInfo.deathday}</p>
                </>
              ) : null}
              <h5>Place of Birth</h5>
              <p>{personalInfo.place_of_birth}</p>
              <h5>Official Site</h5>
              {personalInfo.homepage !== null ? (
                <p>{personalInfo.homepage}</p>
              ) : (
                <p>-</p>
              )}
              <h5>Also Known As</h5>
              {personalInfo.also_known_as !== undefined &&
              personalInfo.also_known_as.length > 0 ? (
                <p>
                  {personalInfo.also_known_as.map(name => (
                    <p>{name}</p>
                  ))}
                </p>
              ) : (
                <p>-</p>
              )}
            </>
          ) : null}
        </Col>
        <Col lg='5'>
          <Tab.Container id='list-group-tabs-example' defaultActiveKey='#link1'>
            <Row>
              <Row>
                <h2>Known For</h2>
                <KnownForCardDeck>
                  {personCredits !== null
                    ? personCredits.cast
                        .sort((a, b) =>
                          a.date > b.date
                            ? 1
                            : b.vote_count > a.vote_count
                            ? -1
                            : 0
                        )
                        .reverse()
                        .slice(0, 4)
                        .map((item, index) => (
                          <Card key={`${item.id}-${index}`}>
                            <Link
                              to={`/whattowatch/details/${item.media_type}/id=${item.id}`}>
                              <Card.Img
                                variant='top'
                                src={
                                  item.poster_path !== undefined
                                    ? `https://image.tmdb.org/t/p/w150_and_h225_bestv2/${item.poster_path}`
                                    : 'https://via.placeholder.com/150x225?text=Image+not+available'
                                }
                                alt={`Poster for ${item.name || item.title}`}
                              />
                              <Card.Title>{item.title || item.name}</Card.Title>
                            </Link>
                          </Card>
                        ))
                    : null}
                </KnownForCardDeck>
                <KnownForCardDeck>
                  {personCredits !== null
                    ? personCredits.cast
                        .sort((a, b) =>
                          a.date > b.date
                            ? 1
                            : b.vote_count > a.vote_count
                            ? -1
                            : 0
                        )
                        .reverse()
                        .slice(4, 8)
                        .map((item, index) => (
                          <Card key={`${item.id}-${index}`}>
                            <Link
                              to={`/whattowatch/details/${item.media_type}/id=${item.id}`}>
                              <Card.Img
                                variant='top'
                                src={
                                  item.poster_path !== undefined
                                    ? `https://image.tmdb.org/t/p/w150_and_h225_bestv2/${item.poster_path}`
                                    : 'https://via.placeholder.com/150x225?text=Image+not+available'
                                }
                                alt={`Poster for ${item.name || item.title}`}
                              />
                              <Card.Title>{item.title || item.name}</Card.Title>
                            </Link>
                          </Card>
                        ))
                    : null}
                </KnownForCardDeck>
              </Row>
              <Row>
                <Row>
                  <CategorySwitchListGroup className='list-group-horizontal'>
                    <ListGroup.Item action href='#link1'>
                      Movies
                    </ListGroup.Item>
                    <ListGroup.Item action href='#link2'>
                      TV Shows
                    </ListGroup.Item>
                  </CategorySwitchListGroup>
                </Row>

                <Row>
                  <Tab.Content>
                    <Tab.Pane eventKey='#link1'>
                      <CreditListGroup>
                        <h2>Actor</h2>
                        {orderedActorMovies !== null
                          ? orderedActorMovies.map(item => (
                              <ListGroup.Item>
                                {item.date === 'NaN' ? 'TBD' : item.date} :{' '}
                                <Link
                                  to={`/whattowatch/details/${item.media_type}/id=${item.id}`}>
                                  <strong>{item.title}</strong>
                                </Link>
                                {item.character !== ''
                                  ? ` as ${item.character}`
                                  : null}
                              </ListGroup.Item>
                            ))
                          : null}
                      </CreditListGroup>
                      <CreditListGroup>
                        <h2>Production</h2>
                        {orderedCrewMovies !== null
                          ? orderedCrewMovies.map(item => (
                              <ListGroup.Item>
                                {item.date === 'NaN' ? 'TBD' : item.date} :{' '}
                                <Link
                                  to={`/whattowatch/details/${item.media_type}/id=${item.id}`}>
                                  <strong>{item.title}</strong>
                                </Link>
                                {item.department !== ''
                                  ? ` as ${item.department}`
                                  : null}
                              </ListGroup.Item>
                            ))
                          : null}
                      </CreditListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey='#link2'>
                      <CreditListGroup>
                        <h2>Acting</h2>
                        {orderedActorTV !== null
                          ? orderedActorTV.map(item => (
                              <ListGroup.Item>
                                {item.date === 'NaN' ? 'TBD' : item.date} :
                                <Link
                                  to={`/whattowatch/details/${item.media_type}/id=${item.id}`}>
                                  <strong>{item.title}</strong>
                                </Link>
                                {item.character !== ''
                                  ? ` as ${item.character}`
                                  : null}
                              </ListGroup.Item>
                            ))
                          : null}
                      </CreditListGroup>
                      <CreditListGroup>
                        <h2>Production</h2>
                        {orderedCrewTV !== null
                          ? orderedCrewTV.map(item => (
                              <ListGroup.Item>
                                {item.date === 'NaN' ? 'TBD' : item.date} :{' '}
                                <Link
                                  to={`/whattowatch/details/${item.media_type}/id=${item.id}`}>
                                  <strong>{item.title}</strong>
                                </Link>
                                {item.department !== ''
                                  ? ` as ${item.department}`
                                  : null}
                              </ListGroup.Item>
                            ))
                          : null}
                      </CreditListGroup>
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Row>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </StyledContainer>
  );
}
