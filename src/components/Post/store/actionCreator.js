import * as constants from './constants';

// native way, not working
// export const getDataAsyncNative = () =>
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(reponse => reponse.json())
//     .then(jsonRes => ({ type: constants.DATA_LOADED, data: jsonRes }));

// thunk way
export const getDataAsyncThunk = data => {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(reponse => reponse.json())
      .then(jsonRes => {
        alert(data);
        dispatch({ type: constants.DATA_LOADED, data: jsonRes });
      });
  };
};

// saga way
// returns plain object as action
// redux-saga relies heavily on generator functions but the good thing is that you won't need to call next() in your code. redux-saga handles that for you under the hood.
export const getDataAsyncSaga = () => {
  return { type: constants.DATA_REQUESTED };
};
