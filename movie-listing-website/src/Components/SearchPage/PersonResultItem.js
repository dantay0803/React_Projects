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
  const { id, name, info, imagePath, category } = props;

  console.log(imagePath);

  return (
    <Styles>
      <Media>
        <Link to={`/Details/${category}/id=${id}`}>
          <img
            width={90}
            height={110}
            className='align-self-center mr-3'
            src={
              imagePath !== null
                ? `https://image.tmdb.org/t/p/w500/${imagePath}`
                : `https://via.placeholder.com/185x278?text=Image+not+available`
            }
            alt={`Image of ${name}`}
          />
        </Link>
        <Media.Body>
          <Link to={`/Details/${category}/id=${id}`}>
            <h5>{name}</h5>
          </Link>
          <p>{info}</p>
        </Media.Body>
      </Media>
    </Styles>
  );
}
