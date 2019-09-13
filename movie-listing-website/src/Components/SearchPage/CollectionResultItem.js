import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  color: var(--bert-black);
  width: 40rem;
  height: 16rem;
  margin-bottom: 12.5rem;

  .card-title {
    margin-top: 1rem;
    margin-left: 1rem;
    font-family: 'Rubik', sans-serif;
  }
`;

export default function CollectionResultItem(props) {
  const { id, title, backdropPath } = props;

  return (
    <Styles>
      <Link to={`/collection/${id}`}>
        <Card>
          <Card.Img
            variant='top'
            src={
              backdropPath !== null
                ? `https://image.tmdb.org/t/p/w500/${backdropPath}`
                : `https://via.placeholder.com/638x358?text=Image+not+available`
            }
          />
          <Card.Title>{title}</Card.Title>
        </Card>
      </Link>
    </Styles>
  );
}
