import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { TBasketSlice, TBasketItem, OrderStatus, TUser } from "./types";

export const defaultState: TBasketSlice = {
  basketList: [],
  totalPrice: 0,
  curreny: "USD",
  orderStatus: OrderStatus.await,
  user: {
    name: "",
    phone: "",
  },
};

export const sendOrder = createAction("sendOrder");

export const basketSlice = createSlice({
  name: "basketSlice",
  initialState: defaultState,
  reducers: {
    addToBasket: (state, { payload: product }: PayloadAction<TBasketItem>) => {
      const currentBasketList = [...state.basketList];
      if (
        currentBasketList &&
        currentBasketList?.length > 0 &&
        currentBasketList?.some((item) => item.id === product.id)
      ) {
        return state;
      }
      const basketList = [...currentBasketList, { ...product, count: 1 }];
      return { ...state, basketList };
    },
    removeProduct: (state, { payload: id }: PayloadAction<number>) => {
      const currentBasketList: TBasketItem[] = [...state.basketList];
      const basketList = currentBasketList.filter((item) => item.id !== id);
      return { ...state, basketList };
    },
    changeCount: (
      state,
      { payload: { id, count } }: PayloadAction<{ id: number; count: number }>
    ) => {
      const currentBasketList = [...state.basketList];
      const basketList = currentBasketList.map((item) =>
        item.id === id ? { ...item, count } : item
      );
      return { ...state, basketList };
    },
    refreshTotalPrice: (state) => {
      const basketList = [...state.basketList];
      const totalResult = basketList.reduce(
        (cur: number, next: TBasketItem) =>
          next.regular_price.value * Number(next?.count) + cur,
        0
      );
      const totalPrice = Number(totalResult.toFixed(2));
      return { ...state, totalPrice };
    },
    setOrderStatus: (
      state,
      { payload: orderStatus }: PayloadAction<OrderStatus>
    ) => ({ ...state, orderStatus }),
    clearBasket: (state) => ({ ...state, basketList: [] }),
    updateUserData: (state, { payload: user }: PayloadAction<TUser>) => ({
      ...state,
      user,
    }),
  },
});

export const { actions, reducer } = basketSlice;
