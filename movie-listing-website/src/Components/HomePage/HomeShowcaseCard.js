import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  .card {
    width: 17.9rem;
    height: 9.1rem;
    border: none;
    box-shadow: none;
    background-color: transparent;
    margin-right: 0.3rem;
  }

  .card-img-overlay {
    color: var(--bert-white);
    text-align: center;
    opacity: 0;
    overflow: hidden;
    border: none;
    border-color: transparent;
    font-size: 0.8rem;
  }

  .card-img-overlay: hover {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }

  .icon {
    font-size: 1rem;
  }
`;

export default function HomeShowcaseCard(props) {
  return (
    <Styles>
      <Link to={`/whattowatch/details/${props.category}/id=${props.id}`}>
        <Card className='bg-dark text-white'>
          <Card.Img
            src={
              props.backdrop_path !== undefined
                ? `https://image.tmdb.org/t/p/w500/${props.backdrop_path}`
                : `https://via.placeholder.com/286x161?text=Image+not+available`
            }
            alt='Card image'
          />
          <Card.ImgOverlay>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.overview}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </Styles>
  );
}
