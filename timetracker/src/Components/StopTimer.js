import React from 'react';

export default function StopTimer(props) {
  const { stopTimer } = props;

  return (
    <button
      className='timeControlButton stopButton'
      onClick={() => stopTimer()}>
      stop
    </button>
  );
}
