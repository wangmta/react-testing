// A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer
import { constants } from '../../components/Form/store';

const forbiddenWords = ['spam', 'money'];

export function forbiddenWordsMiddleware({ getState, dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === constants.ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word => action.data.title.includes(word));

        if (foundWord.length) {
          return dispatch({ type: constants.FOUND_BAD_WORD, data: action.data.title });
        }
      }
      return next(action);
    };
  };
}
