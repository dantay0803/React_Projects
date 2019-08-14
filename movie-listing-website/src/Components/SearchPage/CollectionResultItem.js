import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  color: var(--bert-black);
  width: 40rem;
  height: 16rem;
  margin-bottom: 1.5rem;

  .card-title {
    margin-top: 1rem;
    margin-left: 1rem;
    font-family: 'Rubik', sans-serif;
  }
`;

export default function CollectionResultItem(props) {
  return (
    <Styles>
      <Link to={`/Details/cat=${props.category}%20id=${props.id}`}>
        <Card>
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w500/${props.backdropPath}`}
          />
          <Card.Title>{props.title}</Card.Title>
        </Card>
      </Link>
    </Styles>
  );
}
