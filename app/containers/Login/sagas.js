import { takeLatest, call, put, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  loginActionSuccess,
  loginActionFail,
} from './actions';
import {
  LOGIN_ACTION,
} from './constants';
import {
  loginService,
} from './api';

export function* watchLogin(action) {
  const { username, password } = action;
  const credentials = {
    username,
    password,
  };
  console.log('------------------------------------');
  console.log('credentials', credentials);
  console.log('------------------------------------');
  try {
    yield call(loginService, credentials);
    const userToSave = { username: 'administrador' };
    yield localStorage.setItem('user', JSON.stringify(userToSave));
    yield put(loginActionSuccess());
    browserHistory.push('/home');
  } catch (e) {
    yield put(loginActionFail(e));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    takeLatest(LOGIN_ACTION, watchLogin),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
