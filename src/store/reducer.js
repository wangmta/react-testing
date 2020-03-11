import { combineReducers } from 'redux-immutable';

import { reducer as loginReducer } from '../pages/login/store';
import { reducer as headerReducer } from '../components/Header/store';
import { reducer as FormReducer } from '../components/Form/store';
import { reducer as PostReducer } from '../components/Post/store';

// combine all component level stores
// these are component states
const reducer = combineReducers({
  login: loginReducer,
  header: headerReducer,
  form: FormReducer,
  post: PostReducer
});

export default reducer;
