import axios from 'axios';

export const ActionType = {
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

export const RegisterAuthAction = (userState) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/api/v1/signup', userState);
    const { data } = res;
    dispatch({ type: ActionType.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: ActionType.REGISTER_FAIL,
        payload: error.response.data.error,
      });
    }
  }
};

export const LoginAuthAction = (loginState) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/api/v1/login', loginState);
    const { data } = res;
    dispatch({ type: ActionType.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: ActionType.LOGIN_FAIL,
        payload: error.response.data.error,
      });
    }
  }
};
