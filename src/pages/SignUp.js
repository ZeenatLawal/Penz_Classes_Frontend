import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterAuthAction from '../redux/users/actions/RegisterAuthAction';

const SignUp = () => {
  const [userState, setUserState] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterAuthAction(userState));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Please enter your username"
        onChange={(event) => {
          const username = event.target.value;
          setUserState({ ...userState, ...{ username } });
        }}
      />
      <button type="submit">Sign Up</button>

    </form>
  );
};

export default SignUp;
