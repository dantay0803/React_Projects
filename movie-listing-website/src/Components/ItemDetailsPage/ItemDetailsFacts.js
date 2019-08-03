import React from 'react';
import CustomBadge from '../CustomBadge';

export default function ItemDetailsFacts() {
  return (
    <>
      <h6>Facts</h6>
      <h6>Status</h6>
      <p>Released</p>
      <h6>Release Information</h6>
      <p>
        June 26, 2019 PG-13 Premiere <br />
        July 2, 2019 Theatrical{' '}
      </p>
      <h6>Original Language</h6>
      <p>English</p>
      <h6>Runtime</h6>
      <p>2h 9m</p>
      <h6>Budget</h6>
      <p>$160,000,000.00</p>
      <h6>Revenue</h6>
      <p>$982,052,266.00</p>
      <h6>Genres</h6>
      <p>
        <CustomBadge text={'Action'} />
        <CustomBadge text={'Action'} />
        <CustomBadge text={'Action'} />
      </p>
      <h6>Keywords</h6>
      <p>
        <CustomBadge text={'Action'} />
        <CustomBadge text={'Action'} />
        <CustomBadge text={'Action'} />
        <CustomBadge text={'Action'} />
        <CustomBadge text={'Action'} />
      </p>
    </>
  );
}
