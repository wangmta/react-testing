import * as constants from './constants';
import { fromJS } from 'immutable';

// use immutable.js
const defaultState = fromJS({
  articles: []
});

const addArticle = (state, action) => {
  const oldArticles = state.get('articles');
  return state.set('articles', oldArticles.concat(action.data));
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ADD_ARTICLE:
      return addArticle(state, action);
    default:
      return state;
  }
};
