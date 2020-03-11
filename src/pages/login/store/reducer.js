import * as constants from './constants';
import { fromJS } from 'immutable';

// if not use immutable.js
// const defaultState = {
//   myData: 'original myData value'
// };

// export default (state = defaultState, action) => {
//   let newState = Object.assign({}, state);
//   switch (action.type) {
//     case constants.SET_DATA:
//       newState.myData = action.data;
//       return newState;
//     default:
//       return state;
//   }
// };

// use immutable.js
const defaultState = fromJS({
  myData: 'original myData value',
  remoteArticles: []
});

const getData = (state, action) => {
  return state.set('myData', action.data);
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_DATA:
      return getData(state, action);
    default:
      return state;
  }
};
