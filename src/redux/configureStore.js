import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import coursesReducer from './courses/Courses';
import reservationsReducer from './reservations/Reservations';

const reducer = combineReducers({
  coursesReducer,
  reservationsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
