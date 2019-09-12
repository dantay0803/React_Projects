import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import UserReview from '../UserReview';
import BasicHeader from '../BasicHeader';
import reviewHeader from '../../images/reviewHeader.jpg';
import config from '../../Config';
import Waypoint from '../Waypoint';

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

export default function ReviewsPage(props) {
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [totalPages, setTotalPages] = useState('1');

  const { id, cat, title, releaseYear, posterPath } = props.location.state || {
    title: null,
    releaseYear: null,
    posterPath: ''
  };

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/${cat}/${id.replace(
      'id=',
      ''
    )}/reviews?api_key=${config.API_KEY_V3}`)
      .then(resp => resp.json())
      .then(data => {
        setSearchResults([...searchResults, ...data.results]);
        setTotalPages(data.total_pages);
        setTotalResults(data.total_results);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  }, [page]);

  const updateSearchPageNumber = () => {
    if (page <= totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Styles>
      <Container fluid>
        <BasicHeader
          title={title}
          releaseYear={releaseYear}
          posterPath={posterPath}
          navigateBack={props.history.goBack}
          imagePath={reviewHeader}
        />
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            {searchResults !== null
              ? searchResults.map((review, index) => (
                  <React.Fragment key={review.id}>
                    <UserReview
                      id={review.id}
                      author={review.author}
                      content={review.content}
                    />
                    {searchResults.length > 5 &&
                      index === searchResults.length - 5 && (
                        <Waypoint callback={updateSearchPageNumber} />
                      )}
                  </React.Fragment>
                ))
              : null}
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
