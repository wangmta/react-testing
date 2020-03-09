import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducer';
import thunk from 'redux-thunk';
import { forbiddenWordsMiddleware } from '../common/js/middleware';

// test if browser has Redux DevTools support
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, forbiddenWordsMiddleware));

const store = createStore(RootReducer, enhancer);

export default store;
