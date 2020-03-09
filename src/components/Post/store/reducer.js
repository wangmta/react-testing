import * as constants from './constants';
import { fromJS } from 'immutable';

// use immutable.js
const defaultState = fromJS({
  remoteArticles: []
});

const getDataAsyncThunk = (state, action) => {
  return state.set('remoteArticles', action.data);
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DATA_LOADED:
      return getDataAsyncThunk(state, action);
    default:
      return state;
  }
};
