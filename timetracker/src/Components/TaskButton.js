import React from 'react';

export default function TaskButton(props) {
  const { backgroundColour, task, setTask } = props;

  return (
    <button
      className={`${backgroundColour} taskButton`}
      onClick={() => setTask(task)}>
      {task}
    </button>
  );
}
