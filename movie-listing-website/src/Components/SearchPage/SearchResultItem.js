import React from 'react';
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
  height: 17.38rem;

  .card-title {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .card-text {
    padding-top: 1rem;
  }
`;

const StyledImageCard = styled(Card)`
  width: 11.55rem;
  height: 17.4rem;
  border: none;
  box-shadow: none;
  background-color: transparent;
  margin: 0;

  a: hover ~.card-img-overlay {
    opacity: 0.9;
  }

  .card-img {
    border-radius: 0;
    height: 278.25px;
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

export default function SearchResultItem(props) {
  return (
    <Styles>
      <StyledMedia>
        <StyledImageCard>
          <Link to={`/Details/${props.id}`}>
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500/${props.posterPath}`}
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
              <Card.Title>{props.title}</Card.Title>
              <small className='text-muted'>{props.releaseDate}</small>
              <Card.Text>{props.description.substring(0, 381)}...</Card.Text>
              <OverlayTrigger overlay={<Tooltip>User Score</Tooltip>}>
                <ProgressBar
                  now={props.popularity}
                  label={`${props.popularity}`}
                />
              </OverlayTrigger>
            </Card.Body>
            <Card.Footer>
              <Link to={`/Details/${props.id}`}>
                <small className='text-muted'>Full Details</small>
              </Link>
            </Card.Footer>
          </StyledDetailsCard>
        </Media.Body>
      </StyledMedia>
    </Styles>
  );
}
