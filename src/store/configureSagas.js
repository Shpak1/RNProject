import authSaga from '../components/login_page/sagas';
import questionSaga from '../components/questions_page/sagas';

export default function (sagaMiddleware) {
  sagaMiddleware.run(authSaga);
  sagaMiddleware.run(questionSaga);
}
