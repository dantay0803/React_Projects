import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Media, CardDeck } from 'react-bootstrap';
import ItemDetailsHeader from './ItemDetailsHeader';
import ItemDetailsInfo from './ItemDetailsInfo';
import ItemDetailsFacts from './ItemDetailsFacts';
import config from '../../Config';

const Styles = styled.div`
  .container-fluid {
    padding: 0;
  }
`;

export default function ItemDetailsPage(props) {
  const [searchResults, setSearchResults] = useState(null);
  const [creditsResults, setCreditsResults] = useState(null);
  const [KeywordsResults, setKeywordsResults] = useState(null);
  const { cat, id } = props.match.params;

  useEffect(() => {
    fetchDetails();
    fetchCredits();
    fetchKeywords();
  }, []);

  const fetchDetails = () => {
    fetch(`
      https://api.themoviedb.org/3/${cat}/${id.replace('id=', '')}?api_key=${
      config.API_KEY_V3
    }`)
      .then(resp => resp.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  };

  const fetchCredits = () => {
    fetch(`
      https://api.themoviedb.org/3/${cat}/${id.replace(
      'id=',
      ''
    )}/credits?api_key=${config.API_KEY_V3}`)
      .then(resp => resp.json())
      .then(data => {
        setCreditsResults(data);
      })
      .catch(err =>
        console.error(`Could not fetch credit data - Error: ${err}`)
      );
  };

  const fetchKeywords = () => {
    fetch(`
      https://api.themoviedb.org/3/${cat}/${id.replace(
      'id=',
      ''
    )}/keywords?api_key=${config.API_KEY_V3}`)
      .then(resp => resp.json())
      .then(data => {
        setKeywordsResults(data);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  };

  return (
    <Styles>
      <Container fluid>
        {searchResults === null ? null : (
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={12}>
                  <ItemDetailsHeader
                    title={searchResults.title}
                    popularity={searchResults.vote_average * 10}
                    overview={searchResults.overview}
                    posterPath={searchResults.poster_path}
                    backdropPath={searchResults.backdrop_path}
                    releaseYear={searchResults.release_date}
                    featuredCrew={
                      creditsResults !== null
                        ? creditsResults.crew.slice(0, 3)
                        : []
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={3} />
                <Col lg={6} className='mt-4'>
                  <ItemDetailsInfo
                    id={id.replace('id=', '')}
                    cat={cat}
                    cast={creditsResults !== null ? creditsResults : null}
                    collection={searchResults.belongs_to_collection}
                    posterPath={searchResults.poster_path}
                  />
                </Col>
                <Col lg={3} className='mt-4'>
                  <ItemDetailsFacts
                    status={searchResults.status}
                    releaseInformation={searchResults.release_date}
                    OriginalLanguage={searchResults.original_language}
                    runtime={searchResults.runtime}
                    budget={searchResults.budget}
                    revenue={searchResults.revenue}
                    genres={searchResults.genres}
                    keywords={
                      KeywordsResults !== null ? KeywordsResults.keywords : []
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </Container>
    </Styles>
  );
}
