import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleRoutes = (path) => {
    navigate(path);
  };
  return (
    <form>
      <h2>Log In</h2>
      <input type="text" placeholder="Please enter your username" />
      <button type="button">Log In</button>
      <div>
        <span>New to Penz Classes?</span>
        <span>
          <button type="button" onClick={() => handleRoutes('/signup')}>
            Sign Up
          </button>
        </span>
      </div>
    </form>
  );
};

export default Login;
