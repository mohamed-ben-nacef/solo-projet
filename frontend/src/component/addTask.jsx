import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTask = ({ onTaskAdded, id }) => {
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    date: "",
    status: "",
    imageUrl: "",
    users_id: 10,
  });

  const handleInputChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/tasks/add", taskData)
      .then((response) => {
        console.log("Task added:", response.data);
        navigate("/all-tasks");
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <div>
    <div className="form-container1">
      <form className="task-form" onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={taskData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={taskData.status}
            onChange={handleInputChange}
          >
            <option value="todo">To-Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={taskData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        {taskData.imageUrl && (
          <div className="form-group">
            <label>Image Preview:</label>
            <img src={taskData.imageUrl} alt="Task Image" className="image-preview" />
          </div>
        )}
        <button className="submit-button" type="submit">
          Add Task
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddTask;
