import { takeEvery, put, select } from "redux-saga/effects";
import { actions, sendOrder } from "./reducer";
import { OrderStatus } from "./types";
import { reducerType } from "store";

function* refreshTotalSaga() {
  yield put(actions.refreshTotalPrice());
}
function* setOrderStatusSaga() {
  const {
    basketReducer: { orderStatus },
  }: reducerType = yield select();
  if (orderStatus === OrderStatus.ok) {
    yield put(actions.clearBasket());
  }
}
export function* sendOrderSaga() {
  const {
    basketReducer: { user, basketList },
  }: reducerType = yield select();
  const result: OrderStatus = yield fetch(
    "https://app.aaccent.su/js/confirm.php",
    {
      method: "POST",
      body: JSON.stringify({
        user,
        basketList,
      }),
    }
  ).then(async (data) => {
    const result = await data.json();
    return result.result === "ok" ? OrderStatus.ok : OrderStatus.error;
  });
  yield put(actions.setOrderStatus(result));
}

export function* basketSaga() {
  yield takeEvery(actions.changeCount, refreshTotalSaga);
  yield takeEvery(actions.addToBasket, refreshTotalSaga);
  yield takeEvery(actions.removeProduct, refreshTotalSaga);
  yield takeEvery(sendOrder, sendOrderSaga);
  yield takeEvery(actions.setOrderStatus, setOrderStatusSaga);
}
