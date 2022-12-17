import createSagaMiddleware from "redux-saga";
import { productsSaga } from "pages/products/saga";
import { basketSaga } from "pages/basket/saga";
import { sidebarSaga } from "templates/sidebarLayout/saga";
import { fork } from "redux-saga/effects";

export const sagaMiddleware = createSagaMiddleware();
export function* rootSaga() {
  yield fork(productsSaga);
  yield fork(sidebarSaga);
  yield fork(basketSaga);
}
