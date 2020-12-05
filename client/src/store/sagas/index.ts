import { all, fork } from "redux-saga/effects";

import * as homeDetailsSagas from "./home";
import * as movieDetailsSagas from "./movie";
import * as tvShowDetailsSagas from "./tv-show";
import * as authSagas from "./auth";

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(homeDetailsSagas),
      ...Object.values(movieDetailsSagas),
      ...Object.values(tvShowDetailsSagas),
      ...Object.values(authSagas),
    ].map(fork)
  );
}
