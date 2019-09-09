import React from 'react'
import styled from 'styled-components';
import {
  Media,
  Card,
  ProgressBar,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import { FaChartArea } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  img {
    border: 1px 0 solid rgba(255, 255, 255, 0.125);
    border-right: none;
  }

  .progress {
    border: 1px solid var(--bert-gray);
  }

  .progress-bar {
    color: black;
    font-weight: bold;
    background-color: var(--bert-blue-bright);
  }
`;

const StyledMedia = styled(Media)`
  margin-bottom: 2rem;
`;

const StyledDetailsCard = styled(Card)`
  border-radius: 0;
  color: black;
  height: 8.813rem;
  width: 56.63rem;

  .card-title {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .card-text {
    padding-top: 1rem;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const StyledImageCard = styled(Card)`
  width: 5.875rem;
  height: 8.813rem;
  border: none;
  box-shadow: none;
  background-color: transparent;
  margin: 0;

  a: hover ~.card-img-overlay {
    opacity: 0.9;
  }

  .card-img {
    border-radius: 0;
    height: 8.813rem;
  }

  .card-img-overlay {
    background-color: var(--bert-navy);
    color: white;
    opacity: 0;
    height: 3rem;
    top: auto;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-img-overlay: hover {
    opacity: 0.9;
  }
`;

export default function KeywordListItem(props) {
  const {
    id,
    title,
    releaseDate,
    description,
    popularity,
    posterPath,
    category
  } = props;


  // KEYWORD ITEM LAYOUT
  // rating circle - title - date
  // about

  return (
    <Styles>
      <StyledMedia>
        <StyledImageCard>
          <Link to={`/details/${category}/id=${id}`}>
            <Card.Img
              src={
                posterPath !== null
                  ? `https://image.tmdb.org/t/p/w500/${posterPath}`
                  : `https://via.placeholder.com/185x278?text=Image+not+available`
              }
              alt='Card image'
            />
          </Link>
          <Card.ImgOverlay>
            <OverlayTrigger
              placement='top'
              overlay={
                <Tooltip>
                  <strong>Popularity Rank</strong>
                  <br />
                  Today: 4
                    <br />
                  Last Week: 2
                  </Tooltip>
              }>
              <FaChartArea className='chartIcon' />
            </OverlayTrigger>
          </Card.ImgOverlay>
        </StyledImageCard>
        <Media.Body>
          <StyledDetailsCard>
            <Card.Body>
              <Card.Title>{title} <small className='text-muted'>{releaseDate}</small></Card.Title>
              <Card.Text>{description.substring(0, 197)}...</Card.Text>
              <OverlayTrigger overlay={<Tooltip>User Score</Tooltip>}>
                <ProgressBar now={popularity} label={`${props.popularity}`} />
              </OverlayTrigger>
            </Card.Body>
          </StyledDetailsCard>
        </Media.Body>
      </StyledMedia>
    </Styles>
  )
}
