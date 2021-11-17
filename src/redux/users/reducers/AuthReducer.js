/* eslint-disable no-case-declarations */
import axios from 'axios';
import ActionTypes from '../actions/actionTypes';

const initialState = {
  isSignedUp: false,
  user: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      const newAuthState = {
        isSignedUp: true,
        user: action.payload,
      };
      axios.defaults.headers.common.Authorization = `Bearer ${action.payload.token}`;
      localStorage.setItem('auth', JSON.stringify(newAuthState));
      return newAuthState;
    default:
      return state;
  }
};

export default authReducer;
