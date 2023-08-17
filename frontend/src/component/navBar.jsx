import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({setFiltered}) => {
  
  const onChange = (e) => {
    setFiltered(e.target.value);
  };
  return (
    <nav className="navigation">  
      <Link to='/all-tasks'>
        ALL TASKS
      </Link>
      <Link to='/add-task'>
        ADD TASK
      </Link>
      <div>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e)=>setFiltered(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;