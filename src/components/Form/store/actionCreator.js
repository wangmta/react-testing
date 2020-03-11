import * as constants from './constants';

export const addArticle = data => ({
  type: constants.ADD_ARTICLE,
  data: data
});
