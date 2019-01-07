/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_ACTION,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_FAIL,
  SET_SNACKBAR_STATE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loginAction(username, password) {
  return {
    type: LOGIN_ACTION,
    username,
    password,
  };
}

export function loginActionSuccess() {
  return {
    type: LOGIN_ACTION_SUCCESS,
  };
}

export function loginActionFail(error) {
  return {
    type: LOGIN_ACTION_FAIL,
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
