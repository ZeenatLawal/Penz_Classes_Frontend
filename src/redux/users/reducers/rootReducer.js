import { combineReducers } from 'redux';
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
