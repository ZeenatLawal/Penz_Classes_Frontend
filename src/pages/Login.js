import React, { useSelector } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleRoutes = (path) => {
    navigate(path);
  };
  return (
    <form>
      <h2>Log In</h2>
      <input type="text" placeholder="Enter username" />
      <button type="button" className="btn btn-secondary mx-3 my-4">Log In</button>
      <div>
        <span>New to Penz Classes?</span>
        <span>
          <button type="button" className="border-0 text-primary bg-body mx-2" onClick={() => handleRoutes('/signup')}>
            Sign Up
          </button>
        </span>
      </div>
    </form>
  );
};

export default Login;
