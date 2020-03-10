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

export const getDataAsyncSaga = () => {
  return { type: constants.DATA_REQUESTED };
};
