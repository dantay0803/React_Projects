import React from 'react';
import styled from 'styled-components';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  margin-bottom: 1.5rem;

  .img {
    width: 5.625;
    height: 6.875;
  }
`;

export default function PersonResultItem(props) {
  return (
    <Styles>
      <Media>
        <Link to={`/Details/${props.category}/id=${props.id}`}>
          <img
            width={90}
            height={110}
            className='align-self-center mr-3'
            src={`https://image.tmdb.org/t/p/w500/${props.imagePath}`}
            alt={`Image of ${props.name}`}
          />
        </Link>
        <Media.Body>
          <Link to={`/Details/${props.category}/id=${props.id}`}>
            <h5>{props.name}</h5>
          </Link>
          <p>{props.info}</p>
        </Media.Body>
      </Media>
    </Styles>
  );
}
