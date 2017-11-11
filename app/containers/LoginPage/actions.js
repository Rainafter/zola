import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
} from './constants';

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginError(err) {
  return {
    type: LOGIN_ERROR,
    err,
  };
}

export function clearLoginError() {
  return {
    type: CLEAR_LOGIN_ERROR,
  };
}
