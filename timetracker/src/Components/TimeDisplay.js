import React from 'react';

export default function TimeDisplay(props) {
  const { time } = props;

  return <div className='timeDisplay'>{time}</div>;
}
