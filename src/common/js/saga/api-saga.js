import * as constants from '../../../components/Post/store/constants';
import { takeEvery, call, put } from 'redux-saga/effects';

export default function* watcherSaga() {
  yield takeEvery(constants.DATA_REQUESTED, workerSaga);
}

const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
};

function* workerSaga(action) {
  // action parameter is optional
  console.log(action);

  try {
    const data = yield call(getData);
    // put is acctually dispatch in saga
    yield put({ type: constants.DATA_LOADED, data });
  } catch (error) {
    yield put({ type: constants.API_ERROR, data: error });
  }
}
