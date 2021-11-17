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
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(event) => {
          const username = event.target.value;
          setEnteredUserName({ ...enteredUserName, ...{ username } });
        }}
      />
      <button type="submit">Sign Up</button>
      <p className="border border-secondary w-25 text-center mt-3">{userInfo.message}</p>
    </form>
  );
};

export default SignUp;
