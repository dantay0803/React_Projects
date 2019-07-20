import React from 'react';

export default function AddTaskModal(props) {
  return (
    <div className={`${props.display} backDrop`}>
      <div className='addTaskModal'>
        <div className='addTaskModalHeader'>
          <h3>Add New Task</h3>
        </div>
        <div className='addTaskModalBody'>
          <input
            id='newTaskInput'
            type='text'
            placeholder='Task name...'
            onChange={e => props.addNewTaskInput(e.target.value)}
          />
        </div>
        <div className='addTaskModalFooter'>
          <button
            className='addTaskModalButton addTaskModalButtonCancel'
            onClick={() => props.cancelAddTask()}>
            Cancel
          </button>
          <button
            className='addTaskModalButton addTaskModalButtonSave'
            onClick={() => props.addNewTask()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
