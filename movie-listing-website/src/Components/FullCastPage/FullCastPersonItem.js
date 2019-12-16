import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'react-bootstrap';
import profileFallback from '../../images/profileFallback.png';

export default function FullCastPersonItem(props) {
  const { id, profilePath, name, position } = props;

  return (
    <Media>
      <Link to={`/whattowatch/person/${id}`}>
        <img
          width={58}
          height={87}
          className='align-self-center mr-3'
          src={
            profilePath !== null
              ? `https://image.tmdb.org/t/p/original/${profilePath}`
              : profileFallback
          }
          alt='Generic placeholder'
        />
      </Link>
      <Media.Body>
        <Link to={`/whattowatch/person/${id}`}>
          <h6>{name}</h6>
        </Link>
        <p>{position}</p>
      </Media.Body>
    </Media>
  );
}
