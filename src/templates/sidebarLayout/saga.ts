import { takeEvery, put } from "redux-saga/effects";
import { actions, requestBrends } from "./reducer";
import brends from "back/brands.json";

function* requestBrendsSaga() {
  yield put(actions.setFilter(brends));
}

export function* sidebarSaga() {
  yield takeEvery(requestBrends, requestBrendsSaga);
}
