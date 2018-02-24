/* @flow */
import * as types from './constants';

export const loginRequest = (userName, password) =>
  ({ type: types.LOGIN.REQUEST, credentials: { userName, password } });

export const loginSuccess = (userName: string) => ({
  type: types.LOGIN.SUCCESS,
  userName: userName.userName,

});
export const loginFailure = (error: Object) =>
  ({ type: types.LOGIN.FAILURE, message: error.message });

export const logoutRequest = () => ({ type: types.LOGOUT.REQUEST });

export const logoutSuccess = () => ({ type: types.LOGOUT.SUCCESS });

export const logoutFailure = () => ({ type: types.LOGOUT.FAILURE });
