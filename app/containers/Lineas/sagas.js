/* eslint-disable camelcase */
import { call, put, fork, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getLineas,
  newLine,
  sendEmail,
  getEquipo,
  getEmployeeByNumemp,
  getObjectManager,
} from './api';
import {
  getLineasSuccess,
  getLineasFail,
  getLineaSuccess,
  getLineaFail,
  openModal,
  getEmployeeSuccess,
  getEmployeeFail,
  getEquipoSuccess,
  getEquipoFail,
} from './actions';
import messages from './messages';
import {
  GET_LINEA_REQUEST,
  GET_EMPLOYEE_REQUEST,
  GET_EQUIPO_REQUEST,
} from './constants';

export function* watchGetEmployeeByNumemp(action) {
  try {
    const employee = yield call(getEmployeeByNumemp, action.numemp);
    const objectManager = yield call(getObjectManager, action.numemp);
    yield put(getEmployeeSuccess(employee, objectManager.solicitante, objectManager.array));
  } catch (e) {
    yield put(getEmployeeFail(messages.employeeError));
  }
}

export function* watchGetEquipo(action) {
  try {
    const equipo = yield call(getEquipo, action.solicitudId);
    yield put(getEquipoSuccess(equipo));
  } catch (e) {
    yield put(getEquipoFail(messages.equipoError));
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
    yield call(sendEmail, action.data);
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
    takeLatest(GET_EQUIPO_REQUEST, watchGetEquipo),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
