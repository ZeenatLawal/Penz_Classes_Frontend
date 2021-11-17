import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './users/reducers/rootReducer';

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default configureStore;
