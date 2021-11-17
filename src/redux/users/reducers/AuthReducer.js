import { ActionType } from '../actions/AuthAction';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.REGISTER_SUCCESS:
      return {
        isSignedUp: true,
        user: action.payload,
        message: 'User was created successfully',
      };
    case ActionType.REGISTER_FAIL:
      return {
        isSignedUp: false,
        message: action.payload,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.payload,
        message: 'Login successful',
      };
    case ActionType.LOGIN_FAIL:
      return {
        isLoggedIn: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
