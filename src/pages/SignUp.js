import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterAuthAction } from '../redux/users/actions/AuthAction';

const SignUp = () => {
  const userInfo = useSelector((state) => state.authReducer);
  const [enteredUserName, setEnteredUserName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterAuthAction(enteredUserName));
    e.target.reset();
  };
  const handleRoutes = (path) => {
    navigate(path);
  };
  return (
    <div className="m-auto">
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="col-auto bg-white border p-4">
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
                setEnteredUserName({ ...enteredUserName, ...{ username } });
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-lg btn-secondary rounded-0 w-100">
          Sign Up
        </button>
        {!userInfo.isLoggedIn ? (
          <div>
            <div className="alert text-danger" role="alert">
              {userInfo.message}
            </div>
          </div>

        ) : (
          handleRoutes('/')
        )}
      </form>
    </div>
  );
};

export default SignUp;
