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

  .card-img {
    border-radius: 0;
    height: 278.25px;
  }
`;

export default function SearchResultItem(props) {
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
        </StyledImageCard>
        <Media.Body>
          <StyledDetailsCard>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <small className='text-muted'>{releaseDate}</small>
              <Card.Text>
                {description.length > 300
                  ? `${description.substring(0, 300)}...`
                  : description}
              </Card.Text>
              <OverlayTrigger overlay={<Tooltip>User Score</Tooltip>}>
                <ProgressBar now={popularity} label={`${props.popularity}`} />
              </OverlayTrigger>
            </Card.Body>
            <Card.Footer>
              <Link to={`/details/${props.category}/id=${props.id}`}>
                <small className='text-muted'>Full Details</small>
              </Link>
            </Card.Footer>
          </StyledDetailsCard>
        </Media.Body>
      </StyledMedia>
    </Styles>
  );
}
