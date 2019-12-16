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
  const { id, name, info, imagePath } = props;

  return (
    <Styles>
      <Media>
        <Link to={`/whattowatch/person/${id}`}>
          <img
            width={90}
            height={110}
            className='align-self-center mr-3'
            src={
              imagePath !== null
                ? `https://image.tmdb.org/t/p/w500/${imagePath}`
                : `https://via.placeholder.com/185x278?text=Image+not+available`
            }
            alt={`Profile picture of ${name}`}
          />
        </Link>
        <Media.Body>
          <Link to={`/whattowatch/person/${id}`}>
            <h5>{name}</h5>
          </Link>
          <p>{info}</p>
        </Media.Body>
      </Media>
    </Styles>
  );
}
