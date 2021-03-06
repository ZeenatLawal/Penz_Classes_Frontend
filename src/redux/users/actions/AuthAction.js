import axios from 'axios';

export const ActionType = {
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAIL: 'LOGOUT_FAIL',
};

const saveTokenInLocalStorage = (tokenDetails) => {
  localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
};

export const RegisterAuthAction = (userState) => async (dispatch) => {
  try {
    const res = await axios.post('https://penz-classes-backend.herokuapp.com/api/v1/signup', userState);
    const { data } = res;
    saveTokenInLocalStorage(data);
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
    const res = await axios.post('https://penz-classes-backend.herokuapp.com/api/v1/login', loginState);
    const { data } = res;
    saveTokenInLocalStorage(data);
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

export const LogoutAuthAction = (logoutState) => async (dispatch) => {
  try {
    const res = await axios.delete('https://penz-classes-backend.herokuapp.com/api/v1/logout', logoutState);
    const { data } = res;
    localStorage.removeItem('userDetails');
    dispatch({ type: ActionType.LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: ActionType.LOGOUT_FAIL,
        payload: error.response.data.message,
      });
    }
  }
};

export const checkAutoLogin = (dispatch) => {
  const tokenDetailsString = localStorage.getItem('userDetails');
  let tokenDetails = '';
  if (!tokenDetailsString) {
    dispatch(LogoutAuthAction);
    return;
  }

  tokenDetails = JSON.parse(tokenDetailsString);
  dispatch(LoginAuthAction(tokenDetails));
};
