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
  }

  .jumbotronColor {
    background-color: rgba(31, 40, 51, 0.9);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 40rem;
  }
`;

const MainInfoMedia = styled(Media)`
  margin-top: 3rem;

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
          <Container>
            <MainInfoMedia>
              <img
                src={`https://image.tmdb.org/t/p/original/${posterPath}`}
                alt='Generic placeholder'
              />
              <Media.Body>
                <h2>
                  {title}
                  <p className='releaseYear'>{releaseYear.substring(0, 4)}</p>
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
          </Container>
        </Jumbotron>
      </Jumbotron>
    </Styles>
  );
}
