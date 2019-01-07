/*
 *
 * Lineas reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_LINEAS_SUCCESS,
  GET_LINEAS_FAIL,
  OPEN_MODAL,
  SAVE_LADA,
  SAVE_COLLABORATOR,
  SAVE_DESCRIPTION,
  SAVE_AUTORIZATION,
  SAVE_DECISION,
  GET_LINEA_SUCCESS,
  GET_LINEA_FAIL,
  SET_SNACKBAR_STATE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
} from './constants';

const initialState = fromJS({
  lineas: [],
  arrayCoordinators: [],
  loadingLineas: true,
  snackbar: {
    open: false,
    text: '',
  },
  loading: false,
  showModal: false,
  subLoading: false,
  solicitante: {
    numemp: '00000000',
    nombre: ' ',
    appat: ' ',
    apmat: ' ',
  },
  collaborator: {
    nombre: '',
    number: '',
    job: '',
    center: '',
  },
  lada: '',
  description: '',
  autorization: '',
  decision: false,
  idPlanta: '',
});

function lineasReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case OPEN_MODAL:
      return state
        .set('showModal', action.open);
    case GET_LINEAS_SUCCESS: {
      const data = action.users;
      return state
        .set('snackbar', { open: false, text: '' })
        .set('loadingLineas', false)
        .set('loading', false)
        .set('subLoading', false)
        .set('lineas', List.of(...data));
    }
    case GET_LINEAS_FAIL: {
      const snackbarState = {
        open: true,
        text: action.error.message,
      };
      return state
        .set('snackbar', snackbarState)
        .set('loadingUsers', false);
    }
    case SAVE_LADA:
      return state
        .set('lada', action.lada);
    case SAVE_COLLABORATOR:
      return state
        .set('collaborator', {
          nombre: action.collaborator.nombre_completo,
          number: action.collaborator.numero_empleado,
          job: action.collaborator.puesto,
          center: action.collaborator.centro,
        });
    case SAVE_DESCRIPTION:
      return state
        .set('description', action.description);
    case SAVE_AUTORIZATION:
      return state
        .set('autorization', action.autorization);
    case SAVE_DECISION:
      return state
        .set('decision', action.decision);
    case GET_LINEA_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case GET_LINEA_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    case SET_SNACKBAR_STATE:
      return state
        .set('snackbar', { open: action.open, text: action.text });
    case GET_EMPLOYEE_SUCCESS:
      return state
        .set('solicitante', action.solicitante[0])
        .set('idPlanta', action.idPlanta)
        .set('arrayCoordinators', action.array);
    case GET_EMPLOYEE_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default lineasReducer;
