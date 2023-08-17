import React, { useState } from 'react';
import axios from 'axios';
import AllTasks from './allTasks';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = () => {
    axios.post('http://localhost:4000/api/users/signup', {
      email: signUpEmail,
      password: signUpPassword
    })
    .then(response => {
      console.log('User signed up:', response.data);
    })
    .catch(error => {
      console.error('Error signing up:', error);
    });
  };

  const handleSignIn = () => {
    axios.post('http://localhost:4000/api/users/signin', {
      email: signInEmail,
      password: signInPassword
    })
    .then(response => {
      console.log('User signed in:', response.data);
      setIsSignedIn(true);
      navigate('/all-tasks');
    })
    .catch(error => {
      console.error('Error signing in:', error);
    });
  };

  const toggleSignIn = () => {
    setIsSignInVisible(!isSignInVisible);
  };

  return (
    <div className='home'>
      <div className="form-container">
        {isSignedIn ? (
          <AllTasks />
        ) : isSignInVisible ? (
          <div className="auth-form">
            <h3>Sign In</h3>
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={e => setSignInEmail(e.target.value)}
              className="form-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={signInPassword}
              onChange={e => setSignInPassword(e.target.value)}
              className="form-input"
            />
            <button onClick={handleSignIn} className="form-button">Sign In</button>
            <p>Don't have an account? <button onClick={toggleSignIn} className="arrow-wrapper">Sign Up</button></p>
          </div>
        ) : (
          <div className="auth-form">
            <h3>Sign Up</h3>
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={e => setSignUpEmail(e.target.value)}
              className="form-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={e => setSignUpPassword(e.target.value)}
              className="form-input"
            />
            <button onClick={handleSignUp} className="form-button">Sign Up</button>
            <p>Already have an account? <button onClick={toggleSignIn} className="arrow-wrapper">Sign In</button></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
