import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const Styles = styled.div`
  color: var(--bert-black);
  width: 40rem;
  height: 16rem;

  .card-title {
    margin-top: 1rem;
    margin-left: 1rem;
    font-family: 'Rubik', sans-serif;
  }
`;

// 23 x 462.516

export default function CollectionResultItem(props) {
  return (
    <Styles>
      <Card>
        <Card.Img
          variant='top'
          src={`https://image.tmdb.org/t/p/w500/${props.backdropPath}`}
        />
        <Card.Title>{props.title}</Card.Title>
      </Card>
    </Styles>
  );
}
