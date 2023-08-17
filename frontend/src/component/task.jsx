import React from 'react';
import {useLocation } from 'react-router-dom';

const TaskDetails = ({ addToCart }) => {
  const location = useLocation();
  const selectedTask = location.state.formdef_data
  return (
    <div>
      <div className="tasks-details">
        <div className="task-details">
          <div className="task-info">
            <h1>{selectedTask.title}</h1>
            <p>{`Date: ${selectedTask.date}`}</p>
            <p className="task-desc">{selectedTask.description}</p>
            <p>Status: {selectedTask.status}</p>
            {selectedTask.imageUrl && <img src={selectedTask.imageUrl} alt="Task" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
