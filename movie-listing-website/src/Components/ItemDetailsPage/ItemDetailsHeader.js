import React from 'react';
import styled from 'styled-components';
import {
  Media,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
  Container,
  Jumbotron,
  Row,
  Col
} from 'react-bootstrap';

const Styles = styled.div`
  .jumbotronImage {
    background-image: url('https://image.tmdb.org/t/p/original/${props =>
      props.backdropPath}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 40rem;
    border-bottom: 5px solid rgba(255, 255, 255, 1);
    padding: 0;
    margin: 0;
  }

  .jumbotronColor {
    background-color: rgba(31, 40, 51, 0.9);
    min-height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const MainInfoMedia = styled(Media)`
  margin-top: 5rem;

  .media > h3,
  h4,
  h5,
  h6 {
    color: white;
  }

  img {
    width: 18.75rem;
    height: 28.25rem;
    margin-right: 3rem;
  }

  .releaseYear {
    color: var(--bert-gray);
    font-size: 1rem;
  }

  .progress {
    border: 1px solid var(--bert-gray);
    margin-bottom: 3rem;
  }

  .progress-bar {
    color: black;
    font-weight: bold;
    background-color: var(--bert-blue-bright);
  }
`;

export default function ItemDetailsHeader(props) {
  const {
    title,
    popularity,
    overview,
    posterPath,
    backdropPath,
    releaseYear,
    featuredCrew
  } = props;
  return (
    <Styles backdropPath={backdropPath}>
      <Jumbotron fluid className='jumbotronImage'>
        <Jumbotron fluid className='jumbotronColor'>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <MainInfoMedia>
                <img
                  src={`https://image.tmdb.org/t/p/original/${posterPath}`}
                  alt='Generic placeholder'
                />
                <Media.Body>
                  <h2>
                    {title}
                    {releaseYear !== undefined ? (
                      <p className='releaseYear'>
                        {releaseYear.substring(0, 4)}
                      </p>
                    ) : null}
                  </h2>
                  <OverlayTrigger overlay={<Tooltip>User Score</Tooltip>}>
                    <ProgressBar now={popularity} label={`${popularity}%`} />
                  </OverlayTrigger>
                  <h5>Overview</h5>
                  <p>{overview}</p>

                  <h5 className='mt-5'>Featured Crew</h5>
                  <Row>
                    {featuredCrew.map(crew => (
                      <Col key={crew.id}>
                        <h6>{crew.name}</h6>
                        <p>{crew.job}</p>
                      </Col>
                    ))}
                  </Row>
                </Media.Body>
              </MainInfoMedia>
            </Col>
          </Row>
        </Jumbotron>
      </Jumbotron>
    </Styles>
  );
}
