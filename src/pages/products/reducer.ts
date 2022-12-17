import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { TProductsSlice, TProduct, TSort } from "./types";

export const defaultState: TProductsSlice = {
  products: [],
  pagesCount: 0,
  pageSize: 6,
  chekedIdList: [],
  sortByPrice: 0,
};

export const requestProducts = createAction<number>("requestProducts");

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: defaultState,
  reducers: {
    setProducts: (state, { payload: products }: PayloadAction<TProduct[]>) => {
      return { ...state, products };
    },
    setPagesCount: (state, { payload }: PayloadAction<number>) => {
      return { ...state, pagesCount: payload };
    },
    setChekedIdList: (
      state,
      { payload: chekedIdList }: PayloadAction<number[]>
    ) => {
      return { ...state, chekedIdList };
    },
    setSortByPrice: (state, { payload: sortByPrice }: PayloadAction<TSort>) => {
      return { ...state, sortByPrice };
    },
  },
});
export const { actions, reducer } = productsSlice;
