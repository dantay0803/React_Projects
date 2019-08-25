import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import HomeShowcaseCard from '../HomePage/HomeShowcaseCard';
import config from '../../Config';

const Styles = styled.div`
  .content {
    width: 100%;
    padding: 0;
    margin-bottom: 3rem;
    position: relative;
  }

  .cardList {
    width: 53.13rem;
    padding-top: 1.25rem;
    overflow-y: hidden;
    overflow-x: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }

  .cardList::-webkit-scrollbar {
    width: 0 !important;
  }

  .firstCard {
    display: flex;
    flex-direction: row;
    margin-right: 0.3rem;
  }

  .scrollButton {
    position: absolute;
    top: 1.25rem;
    width: 3.75rem;
    height: 9.125rem;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 6rem;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  .scrollButtonLeft {
    left: 0rem;
  }

  .scrollButtonRight {
    right: 3.5rem;
  }
`;

export default function Recommendations(props) {
  const elScroll = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [searchResults, setSearchResults] = useState(null);

  const { id, cat } = props;

  const scrollRef = value =>
    elScroll.current.scrollBy({
      top: 0,
      left: value,
      behavior: 'smooth'
    });

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.themoviedb.org/3/${cat}/${id}/recommendations?api_key=${
          config.API_KEY_V3
        }&${props.searchOptions}`
      )
        .then(resp => resp.json())
        .then(data => {
          setSearchResults(data.results.slice(0, 9));
          setMaxScroll(
            elScroll.current.scrollWidth - elScroll.current.offsetWidth
          );

          setScrollValue(
            (elScroll.current.scrollWidth - elScroll.current.offsetWidth) / 2
          );
        })
        .catch(err => console.log(`Could not fetch data - Error: ${err}`));
    };

    fetchData();
  }, [id, cat]);

  return (
    <div>
      <Styles>
        <div className='content'>
          <div ref={elScroll} className='cardList'>
            <div className='firstCard'>
              {searchResults != null
                ? searchResults.map(item => {
                    return (
                      <HomeShowcaseCard
                        key={item.id}
                        id={item.id}
                        category={cat}
                        title={cat === 'movie' ? item.title : item.name}
                        overview={`User Rating: ${item.vote_average}`}
                        backdrop_path={item.backdrop_path}
                        poster_path={item.poster_path}
                      />
                    );
                  })
                : null}
            </div>
          </div>

          {elScroll && scrollPos !== 0 ? (
            <Button
              className='scrollButton scrollButtonLeft'
              onClick={() => {
                scrollRef(-scrollValue);
                setScrollPos(scrollPos - scrollValue);
              }}>
              <IoIosArrowBack className='scrollButtonIconLeft' />
            </Button>
          ) : null}

          {elScroll !== null && scrollPos < maxScroll ? (
            <Button
              className='scrollButton scrollButtonRight'
              onClick={() => {
                if (scrollPos < maxScroll) {
                  scrollRef(scrollValue);
                  setScrollPos(scrollPos + scrollValue);
                }
              }}>
              <IoIosArrowForward className='scrollButtonIconRight' />
            </Button>
          ) : null}
        </div>
      </Styles>
    </div>
  );
}
