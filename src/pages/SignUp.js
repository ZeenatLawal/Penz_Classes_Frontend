import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterAuthAction } from '../redux/users/actions/AuthAction';

const SignUp = () => {
  const userInfo = useSelector((state) => state.authReducer);
  const [enteredUserName, setEnteredUserName] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterAuthAction(enteredUserName));
    e.target.reset();
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="col-auto border w-25 p-4">
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
        <button type="submit" className="btn btn-lg btn-secondary rounded-0 w-25">Sign Up</button>

        <div className="alert alert-danger w-25 mt-3" role="alert">
          {userInfo.message}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
