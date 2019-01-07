/*
 *
 * Lineas actions
 *
 */

import {
  DEFAULT_ACTION,
  OPEN_MODAL,
  SAVE_LADA,
  SAVE_COLLABORATOR,
  SAVE_DESCRIPTION,
  SAVE_AUTORIZATION,
  SAVE_DECISION,
  GET_LINEAS_SUCCESS,
  GET_LINEAS_FAIL,
  GET_LINEA_REQUEST,
  GET_LINEA_SUCCESS,
  GET_LINEA_FAIL,
  SET_SNACKBAR_STATE,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getLineasSuccess(users) {
  return {
    type: GET_LINEAS_SUCCESS,
    users,
  };
}

export function getLineasFail(error) {
  return {
    type: GET_LINEAS_FAIL,
    error,
  };
}

export function openModal(open) {
  return {
    type: OPEN_MODAL,
    open,
  };
}

export function saveLada(lada) {
  return {
    type: SAVE_LADA,
    lada,
  };
}

export function saveCollaborator(collaborator) {
  return {
    type: SAVE_COLLABORATOR,
    collaborator,
  };
}

export function saveDescription(description) {
  return {
    type: SAVE_DESCRIPTION,
    description,
  };
}

export function saveAutorization(autorization) {
  return {
    type: SAVE_AUTORIZATION,
    autorization,
  };
}

export function saveDecision(decision) {
  return {
    type: SAVE_DECISION,
    decision,
  };
}

export function getLineaRequest(body) {
  return {
    type: GET_LINEA_REQUEST,
    body,
  };
}

export function getLineaSuccess(message) {
  return {
    type: GET_LINEA_SUCCESS,
    message,
  };
}

export function getLineaFail(error) {
  return {
    type: GET_LINEA_FAIL,
    error,
  };
}

export function setSnackbarState(open, text) {
  return {
    type: SET_SNACKBAR_STATE,
    open,
    text,
  };
}

export function getEmployeeRequest(numemp) {
  return {
    type: GET_EMPLOYEE_REQUEST,
    numemp,
  };
}

export function getEmployeeSuccess(solicitante, idPlanta, array) {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    solicitante,
    idPlanta,
    array,
  };
}

export function getEmployeeFail(error) {
  return {
    type: GET_EMPLOYEE_FAIL,
    error,
  };
}
