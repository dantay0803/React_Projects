import React from 'react';
import CustomBadge from '../CustomBadge';

export default function ItemDetailsFacts(props) {
  const {
    status,
    releaseInformation,
    OriginalLanguage,
    runtime,
    budget,
    revenue,
    genres,
    keywords
  } = props;

  return (
    <>
      <h6>Facts</h6>
      <h6>Status</h6>
      <p>{status}</p>
      <h6>Release Date</h6>
      <p>{releaseInformation}</p>
      <h6>Original Language</h6>
      <p>{OriginalLanguage}</p>
      <h6>Runtime</h6>
      <p>{runtime}</p>
      <h6>Budget</h6>
      <p>${budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
      <h6>Revenue</h6>
      <p>${revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
      <h6>Genres</h6>
      <p>
        {genres.map(genre => (
          <CustomBadge key={genre.id} text={genre.name} />
        ))}
      </p>
      <h6>Keywords</h6>
      <p>
        {keywords.map(keyword => (
          <CustomBadge key={keyword.id} text={keyword.name} />
        ))}
      </p>
    </>
  );
}
