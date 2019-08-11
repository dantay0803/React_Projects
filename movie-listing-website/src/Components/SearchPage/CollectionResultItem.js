import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const Styles = styled.div`
  color: var(--bert-black);
`;

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
