import React from 'react';

export default function CancelButton(props) {
  return (
    <button
      className='timeControlButton deleteButton'
      onClick={() => props.clickFunction()}>
      {props.text}
    </button>
  );
}
