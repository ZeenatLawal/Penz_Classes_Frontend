import ActionTypes from '../actions/actionTypes';

const initialState = {
  message: '',
  status: '',
  user: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        message: 'User created successfully',
        status: 'success',
        user: action.payload,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        message: 'Failed to create user',
        status: 'failed',
        user: '',
      };
    default:
      return state;
  }
};

export default authReducer;
