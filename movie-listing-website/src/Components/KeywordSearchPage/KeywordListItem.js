import React from 'react';
import styled from 'styled-components';
import {
  Media,
  Card,
  ProgressBar,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  margin-top: 2rem;

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

  .text-muted {
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }
`;

const StyledImageCard = styled(Card)`
  width: 5.875rem;
  height: 8.813rem;
  border: none;
  box-shadow: none;
  background-color: transparent;
  margin: 0;
  padding: 0;

  .card-img {
    border-radius: 0;
    height: 8.813rem;
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

  return (
    <Styles>
      <Media>
        <StyledImageCard>
          <Link to={`/whattowatch/details/${category}/id=${id}`}>
            <Card.Img
              src={
                posterPath !== null
                  ? `https://image.tmdb.org/t/p/w500/${posterPath}`
                  : `https://via.placeholder.com/185x278?text=Image+not+available`
              }
              alt='Poster image'
            />
          </Link>
        </StyledImageCard>
        <Media.Body>
          <StyledDetailsCard>
            <Card.Body>
              <Card.Title>
                {title} <small className='text-muted'>{releaseDate}</small>
                <OverlayTrigger overlay={<Tooltip>User Score</Tooltip>}>
                  <ProgressBar now={popularity} label={`${props.popularity}`} />
                </OverlayTrigger>
              </Card.Title>
              <Card.Text>
                {description.length > 0
                  ? description.length > 197
                    ? `${description.substring(0, 197)}...`
                    : description
                  : 'No plot details available'}
              </Card.Text>
            </Card.Body>
          </StyledDetailsCard>
        </Media.Body>
      </Media>
    </Styles>
  );
}
