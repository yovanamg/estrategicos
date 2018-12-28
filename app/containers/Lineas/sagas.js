/* eslint-disable camelcase */
import { call, put, fork, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getLineas,
  newLine,
  getEmployeeByNumemp,
  getObjectManager,
  getIdCoordinators,
} from './api';
import {
  getLineasSuccess,
  getLineasFail,
  getLineaSuccess,
  getLineaFail,
  openModal,
  getEmployeeSuccess,
  getEmployeeFail,
} from './actions';
import messages from './messages';
import {
  GET_LINEA_REQUEST,
  GET_EMPLOYEE_REQUEST,
} from './constants';

export function* watchGetEmployeeByNumemp(action) {
  try {
    const employee = yield call(getEmployeeByNumemp, action.numemp);
    const objectManager = yield call(getObjectManager, action.numemp);
    const idPlanta = objectManager[0].id_planta;
    const arrayCoordinators = yield call(getIdCoordinators, idPlanta);
    console.log('arrayCoordinators1', arrayCoordinators);
    yield put(getEmployeeSuccess(employee, arrayCoordinators));
  } catch (e) {
    console.log('------------------------------------');
    console.log('entra aca');
    console.log('------------------------------------');
    yield put(getEmployeeFail(messages.employeeError));
  }
}


export function* watchGetLineas() {
  try {
    const users = yield call(getLineas);
    yield put(getLineasSuccess(users));
  } catch (e) {
    yield put(getLineasFail(e));
  }
}

export function* watchNewLinea(action) {
  try {
    yield call(newLine, action.body);
    yield put(getLineaSuccess(messages.success));
    yield put(openModal(false));
  } catch (e) {
    yield put(getLineaFail(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetLineas),
    takeLatest(GET_LINEA_REQUEST, watchNewLinea),
    takeLatest(GET_EMPLOYEE_REQUEST, watchGetEmployeeByNumemp),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
