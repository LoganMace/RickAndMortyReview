import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import favReducer from './favReducer';
import charReducer from './charReducer';


const combinedReducers = combineReducers({
  favs: favReducer,
  chars: charReducer
});

const store = createStore(
  combinedReducers,
  applyMiddleware(promiseMiddleware())
);

export default store;