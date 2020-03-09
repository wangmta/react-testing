import * as constants from './constants';

export const getData = data => ({
  type: constants.SET_DATA,
  data: data
});

// equals
// {
//   return {
//     type: constants.SET_DATA,
//     data: data
//   };
// }
