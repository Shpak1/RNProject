/* @flow */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

/* Middleware */
import { createLogger } from 'redux-logger';
import freeze from 'redux-freeze';
import createSagaMiddleware from 'redux-saga';

import runSagas from './configureSagas';
import rootReducer from './composeReducers';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
let middleware;
let composer;

if (global.__DEV__) {
  middleware = [
    logger,
    freeze,
    sagaMiddleware,
  ];
  composer = composeWithDevTools;
} else {
  middleware = [
    sagaMiddleware,
  ];
  composer = compose;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    undefined,
    composer(
      applyMiddleware(...middleware),
    )
  );
  runSagas(sagaMiddleware);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }


  return { store };
}
