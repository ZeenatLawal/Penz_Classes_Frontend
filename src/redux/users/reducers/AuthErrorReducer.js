import ActionTypes from '../actions/actionTypes';

const authError = {
  message: '',
};

const authErrorReducer = (state = authError, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_FAIL:
      return { message: action.payload };
    default:
      return state;
  }
};

export default authErrorReducer;
