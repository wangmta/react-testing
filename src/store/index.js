import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducer';
import { forbiddenWordsMiddleware } from '../common/js/middleware';
import createSagaMiddleware from 'redux-saga';
import apiSage from '../common/js/saga/api-saga';

// test if browser has Redux DevTools support
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const initSagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initSagaMiddleware));

const store = createStore(RootReducer, enhancer);

initSagaMiddleware.run(apiSage);

export default store;
