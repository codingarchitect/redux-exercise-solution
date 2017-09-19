import { createStore, applyMiddleware } from 'redux';
import multiAlertStore from './multi-alert-store';

const store = createStore(multiAlertStore.reducer,
  {},
  applyMiddleware());

export default store;
