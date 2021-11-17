import ActionTypes from '../actions/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        isSignedUp: true,
        user: action.payload,
        message: 'User was created successfully',
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        isSignedUp: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
