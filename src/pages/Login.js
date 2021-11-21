import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAuthAction } from '../redux/users/actions/AuthAction';

const Login = () => {
  const userLoginInfo = useSelector((state) => state.authReducer);
  const [loggedUserName, setLoggedUserName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = (
    <div>
      {!userLoginInfo.isLoggedIn ? (
        <div className="alert text-danger" role="alert">
          {userLoginInfo.message}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
  const handleRoutes = (path) => {
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAuthAction(loggedUserName));
    e.target.reset();
  };

  return (
    <div className="m-auto">
      <h3>LOGIN</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="col-auto border p-4">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
              onChange={(event) => {
                const username = event.target.value;
                setLoggedUserName({ ...loggedUserName, ...{ username } });
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-lg btn-secondary rounded-0 w-100">Log In</button>
        <div className="text-center mt-2">
          <span><small>New to Penz Classes?</small></span>
          <span>
            <button type="button" className="border-0 p-1 text-primary bg-body mx-2" onClick={() => handleRoutes('/signup')}>
              <small>Sign Up</small>
            </button>
          </span>
          {alert}
        </div>
      </form>
    </div>
  );
};

export default Login;
