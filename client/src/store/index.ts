import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducer from "./reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store;

// then run the saga
sagaMiddleware.run(sagas);
