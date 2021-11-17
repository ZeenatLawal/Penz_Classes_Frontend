import axios from 'axios';
import ActionTypes from './actionTypes';

const RegisterAuthAction = (userState) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/api/v1/signup', userState);
    const { data } = res;
    dispatch({ type: ActionTypes.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ActionTypes.REGISTER_FAIL, payload: {} });
  }
};

export default RegisterAuthAction;
