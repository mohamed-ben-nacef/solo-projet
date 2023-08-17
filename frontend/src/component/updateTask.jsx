import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, useLocation } from 'react-router-dom';

const UpdateTask = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const formdefData = location.state.formdef_data

  const [taskData, setTaskData] = useState(formdefData || {
    _id: '',
    title: '',
    description: '',
    date: '',
    status: 'todo',
    imageUrl: '',
  });

  const handleInputChange = (e) => {
    setTaskData({...taskData,[e.target.name]:e.target.value})
   };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedData = { ...taskData };
      delete updatedData._id;

      await axios.put(`http://localhost:4000/api/tasks/${formdefData.id}`, updatedData);
      navigate('/all-tasks');
      console.log('Task updated successfully');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Update Task</h2>
        <form className="task-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label">Title:</label>
            <input
              className="form-input"
              type="text"
              name="title"
              defaultValue={taskData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description:</label>
            <textarea
              className="form-input"
              name="description"
              defaultValue={taskData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date:</label>
            <input
              className="form-input"
              type="date"
              name="date"
              defaultValue={taskData.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Status:</label>
            <select
              className="form-input"
              name="status"
              defaultValue={taskData.status}
              onChange={handleInputChange}
            >
              <option value="todo">To-Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Image URL:</label>
            <input
              className="form-input"
              type="text"
              name="imageUrl"
              defaultValue={taskData.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <button className="submit-button" type="submit">
            Update Task
          </button>
        </form>
      </div>
    </div>
    </div>
  );
  
};

export default UpdateTask;
