import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import {
  types,
} from './constants';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './actions';

function* loginSaga(action) {
  try {
    const userName = action.credentials;
    yield put(loginSuccess(userName));
  } catch (e) {
    yield put(loginFailure(e));
  }
}

function* logoutSaga(action) {
  try {
    yield put(logoutSuccess(action.user));
  } catch (e) {
    yield put(logoutFailure(e));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
  ]);
}
