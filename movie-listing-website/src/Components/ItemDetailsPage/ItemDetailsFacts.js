import React from 'react';
import { Link } from 'react-router-dom';
import CustomBadge from '../CustomBadge';

export default function ItemDetailsFacts(props) {
  const {
    id,
    cat,
    status,
    OriginalLanguage,
    genres,
    keywords,
    releaseInformation,
    runtime,
    budget,
    revenue,
    networks,
    type,
    episodeRuntime
  } = props;

  return (
    <>
      <h5>Facts</h5>
      <h6>Status</h6>
      <p>{status}</p>
      {releaseInformation !== undefined ? (
        <>
          <h6>Release Date</h6>
          <p>{releaseInformation}</p>
        </>
      ) : null}
      {networks !== undefined ? (
        <>
          <h6>Networks</h6>
          {networks.map(network => (
            <p key={network.id}>{network.name}</p>
          ))}
        </>
      ) : null}
      {type !== undefined ? (
        <>
          <h6>Type</h6>
          <p>{type}</p>
        </>
      ) : null}
      <h6>Original Language</h6>
      <p>{OriginalLanguage}</p>
      {runtime !== undefined ? (
        <>
          <h6>Runtime</h6>
          <p>{runtime}</p>
        </>
      ) : null}
      {episodeRuntime !== undefined ? (
        <>
          <h6>Runtime</h6>
          {episodeRuntime.map(time => (
            <p key={time}>{time}</p>
          ))}
        </>
      ) : null}
      {budget !== undefined ? (
        <>
          <h6>Budget</h6>
          <p>${budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
        </>
      ) : null}
      {revenue !== undefined ? (
        <>
          <h6>Revenue</h6>
          <p>${revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
        </>
      ) : null}
      <h6>Genres</h6>
      <p>
        {genres.map(genre => (
          <Link
            to={{
              pathname: `/genre/${genre.id}/${cat}`,
              state: { name: genre.name }
            }}
            key={genre.id}>
            <CustomBadge text={genre.name} />
          </Link>
        ))}
      </p>
      <h6>Keywords</h6>
      {keywords !== undefined ? (
        <p>
          {keywords.map(keyword => (
            <Link
              to={{
                pathname: `/keyword/${keyword.id}/${cat}`,
                state: { name: keyword.name }
              }}
              key={keyword.id}>
              <CustomBadge text={keyword.name} />
            </Link>
          ))}
        </p>
      ) : null}
    </>
  );
}
