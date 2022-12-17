import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { TProductsSlice, TProduct, TSort } from "./types";

export const defaultState: TProductsSlice = {
  products: [],
  pagesCount: 0,
  pageSize: 6,
  chekedIdList: [],
  sortByPrice: 0,
  currentPage: 1,
  activeCardId: 0,
};

export const requestProducts = createAction<number>("requestProducts");

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: defaultState,
  reducers: {
    setProducts: (state, { payload: products }: PayloadAction<TProduct[]>) => ({
      ...state,
      products,
    }),
    setPagesCount: (state, { payload: pagesCount }: PayloadAction<number>) => ({
      ...state,
      pagesCount,
    }),
    setCurrentPage: (
      state,
      { payload: currentPage }: PayloadAction<number>
    ) => ({
      ...state,
      currentPage,
    }),
    setChekedIdList: (
      state,
      { payload: chekedIdList }: PayloadAction<number[]>
    ) => ({ ...state, chekedIdList, currentPage: 1 }),
    setSortByPrice: (
      state,
      { payload: sortByPrice }: PayloadAction<TSort>
    ) => ({ ...state, sortByPrice, currentPage: 1 }),
    setActiveCardId: (
      state,
      { payload: activeCardId }: PayloadAction<number>
    ) => ({ ...state, activeCardId }),
  },
});
export const { actions, reducer } = productsSlice;
