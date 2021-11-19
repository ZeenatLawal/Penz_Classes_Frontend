import { ActionType } from '../actions/AuthAction';

const authState = {
  isLoggedIn: false,
  user: {
    username: '',
    token: '',
  },
};
const getAuthState = () => authState;
const newAuth = getAuthState();

const authReducer = (state = newAuth, action) => {
  switch (action.type) {
    case ActionType.REGISTER_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.payload,
        message: 'User was created successfully',
      };
    case ActionType.REGISTER_FAIL:
      return {
        ...authState,
        message: action.payload,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        ...action.payload,
      };
    case ActionType.LOGIN_FAIL:
      return {
        isLoggedIn: false,
        message: action.payload,
      };
    case ActionType.LOGOUT_SUCCESS:
      return authState;
    case ActionType.LOGOUT_FAIL:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
