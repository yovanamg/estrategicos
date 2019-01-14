/*
 *
 * Lineas actions
 *
 */

import {
  DEFAULT_ACTION,
  OPEN_MODAL,
  OPEN_MODAL_FIRMA,
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
  GET_EQUIPO_REQUEST,
  GET_EQUIPO_SUCCESS,
  GET_EQUIPO_FAIL,
  SAVE_LINEA,
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

export function openModalFirma(open) {
  return {
    type: OPEN_MODAL_FIRMA,
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

export function getLineaRequest(body, data) {
  return {
    type: GET_LINEA_REQUEST,
    body,
    data,
  };
}

export function getEquipoRequest(solicitudId) {
  return {
    type: GET_EQUIPO_REQUEST,
    solicitudId,
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

export function getEquipoSuccess(equipo) {
  return {
    type: GET_EQUIPO_SUCCESS,
    equipo,
  };
}

export function getEquipoFail(error) {
  return {
    type: GET_EQUIPO_FAIL,
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

export function saveLinea(linea) {
  return {
    type: SAVE_LINEA,
    linea,
  };
}
