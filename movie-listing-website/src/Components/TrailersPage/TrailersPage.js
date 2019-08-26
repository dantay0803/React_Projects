import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BasicHeader from '../BasicHeader';

const Styles = styled.div`
  margin-top: 5rem;

  .trailerListing {
    margin-top: 2rem;
  }
`;

const StyledTrailerCard = styled(Card)`
  color: var(--bert-black);
  margin: 1rem;
  width: 32.5rem;
  height: 25rem;

  .card-title {
    margin-top: 0.5rem;
    text-align: center;
    font-family: 'Rubik', sans-serif;
  }
`;

export default function TrailersPage(props) {
  const { title, releaseYear, posterPath, trailerResults } = props.location
    .state || {
    title: null,
    releaseYear: null,
    posterPath: null,
    trailerResults: null
  };

  //id, key, name, site, size, type

  const listTrailers = () => {
    let rows = [];

    if (trailerResults !== null) {
      for (let i = 0; i < trailerResults.results.length; i += 2) {
        rows.push(
          <Row className='justify-content-md-center'>
            <Col md='6'>
              <StyledTrailerCard key={trailerResults.results[i].id}>
                <Card.Img
                  variant='top'
                  src={
                    trailerResults.results[i].key !== null
                      ? `https://i.ytimg.com/vi/${trailerResults.results[i].key}/hqdefault.jpg`
                      : `https://via.placeholder.com/638x358?text=Image+not+available`
                  }
                />
                <Card.Title>{trailerResults.results[i].name}</Card.Title>
              </StyledTrailerCard>
            </Col>
            <Col md='6'>
              <StyledTrailerCard key={trailerResults.results[i + 1].id}>
                <Card.Img
                  variant='top'
                  src={
                    trailerResults.results[i + 1].key !== null
                      ? `https://i.ytimg.com/vi/${trailerResults.results[i + 1].key}/hqdefault.jpg`
                      : `https://via.placeholder.com/638x358?text=Image+not+available`
                  }
                />
                <Card.Title>{trailerResults.results[i + 1].name}</Card.Title>
              </StyledTrailerCard>
            </Col>
          </Row>
        );
      }
    }

    return rows;
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
        <Container className='trailerListing'>{listTrailers()}</Container>
      </Container>
    </Styles>
  );
}
