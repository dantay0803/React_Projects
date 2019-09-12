import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import KeywordListItem from './KeywordListItem';
import config from '../../Config';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Media,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';
import keywordsHeader from '../../images/keywordsHeader.jpg';
import Waypoint from '../Waypoint';

const Styles = styled.div`
  .container-fluid {
    padding: 0;
  }

  .jumbotronImage {
    background-image: url(${keywordsHeader});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 11rem;
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
  margin-left: 10rem;

  .media > h3,
  h4,
  h5,
  h6 {
    color: white;
  }

  img {
    width: 8rem;
    height: 12rem;
    margin-right: 3rem;
  }

  .text-muted {
    font-size: 0.95rem;
    float: right;
  }
`;

const StyledDropdown = styled(DropdownButton)`
  float: right;
  margin-left: 0.5rem;

  .dropdown-toggle {
    background: none !important;
    border: none !important;
    font-weight: bold !important;
  }

  .dropdown-item {
    color: var(--bert-gray);
  }

  .dropdown-item: hover {
    color: var(--bert-blue-dark);
  }
`;

export default function KeywordSearchPage(props) {
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [totalPages, setTotalPages] = useState('1');
  const [sortOption, setSortOption] = useState('popularity.desc');
  const { id, cat } = props.match.params;
  const url = props.match.url;
  const searchName = props.history.location.state.name;
  useEffect(() => {
    if (url.includes('keyword')) {
      getResults('with_keywords');
    } else {
      getResults('with_genres');
    }
  }, [id, cat, sortOption, page]);

  const getResults = searchTerm => {
    fetch(
      `https://api.themoviedb.org/3/discover/${cat}?api_key=${config.API_KEY_V3}&language=en-US&sort_by=${sortOption}&include_adult=false&include_video=false&page=${page}&${searchTerm}=${id}`
    )
      .then(resp => resp.json())
      .then(data => {
        setSearchResults([...searchResults, ...data.results]);
        setTotalPages(data.total_pages);
        setTotalResults(data.total_results);
      })
      .catch(err => console.error(`Could not fetch data - Error: ${err}`));
  };

  const updateURL = target => {
    setSearchResults([]);

    if (url.includes('keyword')) {
      props.history.push(`/keyword/${id}/${target}`, { name: searchName });
    } else {
      props.history.push(`/genre/${id}/${target}`, { name: searchName });
    }
  };

  const updateSearchPageNumber = () => {
    if (page <= totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Styles>
      <Container fluid>
        <Jumbotron fluid className='jumbotronImage'>
          <Jumbotron fluid className='jumbotronColor'>
            <Row>
              <Col lg={{ span: 8, offset: 2 }}>
                <MainInfoMedia>
                  <Media.Body>
                    <h3>
                      {searchName}
                      <small className='text-muted'>
                        {totalResults !== null ? totalResults : null} Results
                      </small>
                    </h3>
                    <StyledDropdown id='dropdown-sort-results' title='SORT'>
                      <Dropdown.Item
                        as='button'
                        onClick={() => setSortOption('popularity.desc')}>
                        Popularity
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as='button'
                        onClick={() => setSortOption('vote_average.desc')}>
                        Rating
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as='button'
                        onClick={() => setSortOption('release_date.desc')}>
                        Release Date
                      </Dropdown.Item>
                    </StyledDropdown>
                    <StyledDropdown
                      id='dropdown-category'
                      title={cat.toUpperCase()}>
                      <Dropdown.Item
                        as='button'
                        onClick={() => updateURL('movie')}>
                        Movie
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as='button'
                        onClick={() => updateURL('tv')}>
                        TV
                      </Dropdown.Item>
                    </StyledDropdown>
                  </Media.Body>
                </MainInfoMedia>
              </Col>
            </Row>
          </Jumbotron>
        </Jumbotron>
        <Row>
          <Col sm='12' md={{ size: 6, offset: 3 }}>
            {searchResults !== null
              ? searchResults.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <KeywordListItem
                      id={item.id}
                      title={item.name || item.title}
                      releaseDate={item.release_date || item.first_aired}
                      description={item.overview}
                      popularity={item.vote_average * 10}
                      posterPath={item.poster_path}
                      category={cat}
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
