import * as constants from './constants';
import { fromJS } from 'immutable';

// use immutable.js
const defaultState = fromJS({
  remoteArticles: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DATA_LOADED:
      return state.set('remoteArticles', action.data);
    default:
      return state;
  }
};
