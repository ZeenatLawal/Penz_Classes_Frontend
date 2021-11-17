import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAuthAction } from '../redux/users/actions/AuthAction';

const Login = () => {
  const navigate = useNavigate();

  const handleRoutes = (path) => {
    navigate(path);
  };

  const userLoginInfo = useSelector((state) => state.authReducer);
  const [loggedUserName, setLoggedUserName] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAuthAction(loggedUserName));
    e.target.reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(event) => {
          const username = event.target.value;
          setLoggedUserName({ ...loggedUserName, ...{ username } });
        }}
      />
      <button type="submit" className="btn btn-secondary mx-3 my-4">Log In</button>
      <p>{userLoginInfo.message}</p>
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
