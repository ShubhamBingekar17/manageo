import {createStore, applyMiddleware, combineReducers} from 'redux';
import storeReducer from '../reducers/storeReducers';

const customMiddleWare = store => next => action => {
  next(action);
  return action.type;
};

const store = createStore(storeReducer);

export default store;
