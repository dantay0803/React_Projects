import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import SearchResultItem from '../SearchPage/SearchResultItem';
import config from '../../Config';
import Waypoint from '../Waypoint';

const Styles = styled.div`
  .container {
    margin-top: 5rem;
  }

  .searchTitle {
    color: white;
  }
`;

export default function QuickSearchPage(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState('1');
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const { cat, option } = props.match.params;
  const searchName = props.history.location.state.searchName;

  useEffect(() => {
    const fetchDetails = () => {
      let searchPage = 1;

      if (selectedCat !== cat || selectedOption !== option) {
        setSelectedCat(cat);
        setSelectedOption(option);
        setPage(1);
      } else {
        searchPage = page;
      }

      fetch(`
        https://api.themoviedb.org/3/${cat}/${option}?api_key=${config.API_KEY_V3}&page=${searchPage}`)
        .then(resp => resp.json())
        .then(data => {
          if (page <= 1) {
            setSearchResults(data.results);
          } else {
            setSearchResults([...searchResults, ...data.results]);
          }

          setTotalPages(data.total_pages);
        })
        .catch(err => console.error(`Could not fetch data - Error: ${err}`));
    };

    fetchDetails();
  }, [cat, option, page]);

  const updateSearchPageNumber = () => {
    console.log('updating page');
    if (page <= totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <Styles>
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <h3 className='searchTitle'>{searchName}</h3>
            {searchResults === null
              ? null
              : searchResults.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <SearchResultItem
                      id={item.id}
                      title={item.title || item.name}
                      releaseDate={item.release_date || item.first_air_date}
                      description={
                        item.overview.length > 0
                          ? item.overview.length > 247
                            ? `${item.overview.substring(0, 247)}...`
                            : item.overview
                          : 'No description available'
                      }
                      popularity={item.vote_average * 10}
                      posterPath={item.poster_path}
                      category={cat === 'movie' || cat === 'tv' ? cat : option}
                    />
                    {searchResults.length > 5 &&
                      index === searchResults.length - 5 && (
                        <Waypoint callback={updateSearchPageNumber} />
                      )}
                  </React.Fragment>
                ))}
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
