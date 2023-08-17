import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/tasks/get')
      .then(response => {
        setTasks(response.data);
        setFilteredTasks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const deleteTask = id => {
    axios.delete(`http://localhost:4000/api/tasks/${id}`)
      .then(response => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
        setFilteredTasks(prevFilteredTasks => prevFilteredTasks.filter(task => task.id !== id));
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };




  return (
    <div>
      <div>
        <h2>All Tasks</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="task-list">
            {filteredTasks.map(task => (
              <div key={task.id} className="task-card">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
                <img src={task.imageUrl} alt="Task" onClick={() => {
                    navigate(`/task/${task.id}`, {
                      state: { formdef_data: task },
                    });
                    window.location.reload();
                  }}  />
                <button  className="deletebtn"onClick={() => deleteTask(task.id)}>Delete</button>
                <button  onClick={() => {
                    navigate(`/update-task/${task.id}`, {
                      state: { formdef_data: task },
                    });
                    window.location.reload();
                  }}>Update Task</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTasks;