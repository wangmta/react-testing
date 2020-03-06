import { combineReducers } from 'redux';

import { reducer as loginReducer } from '../pages/login/store';
import { reducer as headerReducer } from '../components/Header/store';

// combine all component level stores
const reducer = combineReducers({
  login: loginReducer,
  header: headerReducer
});

export default reducer;
