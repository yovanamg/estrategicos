/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_ACTION,
  LOGIN_ACTION_FAIL,
  SET_SNACKBAR_STATE,
  LOGIN_ACTION_SUCCESS,
} from './constants';

const initialState = fromJS({
  username: '',
  errorTextPass: '',
  password: '',
  snackbar: {
    open: false,
    text: '',
  },
  loading: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOGIN_ACTION: {
      const username = state.get('username');
      const password = state.get('password');
      const errorTextPass = state.get('errorTextPass');

      if (!errorTextPass) {
        return state.merge({
          username,
          password,
          loading: true,
        });
      }
      return state;
    }
    case LOGIN_ACTION_SUCCESS:
      return state
        .set('username', '')
        .set('password', '')
        .set('loading', false);
    case LOGIN_ACTION_FAIL: {
      const snackbarState = {
        open: true,
        text: 'Usuario o contraseña incorrectos.',
      };
      return state
        .set('snackbar', snackbarState)
        .set('loading', false);
    }
    case SET_SNACKBAR_STATE: {
      const { open, text } = action;
      const snackbarState = {
        open,
        text,
      };
      return state.set('snackbar', snackbarState);
    }
    default:
      return state;
  }
}

export default loginReducer;
