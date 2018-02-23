import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getQuestionsList } from '../../api/getQuestionsList'
import {
  types,
} from './constants';
import {
  requestSuccess,
  requestFailure,
} from './actions'

function* questionsSaga() {
  try {
    const questionsList = yield call(getQuestionsList);
    yield put(requestSuccess( questionsList ))
  } catch (e) {
    yield put(requestFailure(e));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.QUESTIONS_LIST.REQUEST, questionsSaga),
  ]);
}
