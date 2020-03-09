import { combineReducers } from 'redux-immutable';

import { reducer as loginReducer } from '../pages/login/store';
import { reducer as headerReducer } from '../components/Header/store';

// combine all component level stores
// these are component states
const reducer = combineReducers({
  login: loginReducer,
  header: headerReducer
});

export default reducer;
