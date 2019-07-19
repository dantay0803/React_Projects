import React from 'react';

export default function DeleteTime(props) {
  return (
    <button
      className='timeControlButton deleteButton'
      onClick={() => props.deleteEntry()}>
      delete
    </button>
  );
}
