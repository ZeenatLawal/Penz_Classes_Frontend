import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coursesReducer from './courses/Courses';
import reservationsReducer from './reservations/Reservations';
import authReducer from './users/reducers/AuthReducer';

const reducer = combineReducers({
  coursesReducer,
  reservationsReducer,
  authReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
