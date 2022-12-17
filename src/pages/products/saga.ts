import { takeEvery, put, select } from "redux-saga/effects";
import { actions, requestProducts } from "./reducer";
import { reducerType } from "store";
import { getProducts } from "back/productsBack";
import {
  submitFilter,
  actions as sidebarActions,
} from "templates/sidebarLayout/reducer";

function* requestProductsSaga({ payload: currentPage }: { payload: number }) {
  try {
    const {
      productsReducer: { pageSize, chekedIdList, sortByPrice },
    }: reducerType = yield select();
    const { products, count } = getProducts(
      currentPage,
      pageSize,
      chekedIdList,
      sortByPrice
    );
    const pagesCount = Math.round(count / pageSize);
    yield put(actions.setPagesCount(pagesCount));
    yield put(actions.setProducts(products));
  } catch (err) {
    console.error(err);
  }
}

function* setSortByPriceSaga() {
  yield requestProductsSaga({ payload: 1 });
}

function* submitFilterSaga() {
  const {
    sidebarReducer: { chekedIdList },
  }: reducerType = yield select();
  yield put(actions.setChekedIdList(chekedIdList));
  yield requestProductsSaga({ payload: 1 });
}
function* clearFilterSaga() {
  yield put(actions.setChekedIdList([]));
  yield requestProductsSaga({ payload: 1 });
}

export function* productsSaga() {
  yield takeEvery(requestProducts, requestProductsSaga);
  yield takeEvery(actions.setSortByPrice, setSortByPriceSaga);
  yield takeEvery(submitFilter, submitFilterSaga);
  yield takeEvery(sidebarActions.clearFilter, clearFilterSaga);
}
