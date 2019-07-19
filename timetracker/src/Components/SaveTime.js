import React from 'react';

export default function SaveTime(props) {
  return (
    <button
      className='timeControlButton saveButton'
      onClick={() => props.saveEntry()}>
      save
    </button>
  );
}
