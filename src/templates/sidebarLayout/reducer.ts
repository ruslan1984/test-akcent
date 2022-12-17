import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { TFilterSlice, TFilterData } from "./types";

export const defaultState: TFilterSlice = {
  filterData: [],
  chekedIdList: [],
  loading: false,
  error: undefined,
};

export const submitFilter = createAction("submitFilter");
export const requestBrends = createAction("requestBrends");

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState: defaultState,
  reducers: {
    setFilter: (
      state,
      { payload: filterData }: PayloadAction<TFilterData[]>
    ) => ({ ...state, filterData }),
    updateFilter: (state, { payload: id }: PayloadAction<number>) => {
      const currentFilterData = [...state.filterData];
      const filterData = currentFilterData.map((item) =>
        item.id === id
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      );
      const chekedIdList = [...state.chekedIdList];
      const ind = chekedIdList.findIndex((item) => item === id);
      ind === -1 ? chekedIdList.push(id) : chekedIdList.splice(ind, 1);
      return { ...state, chekedIdList, filterData };
    },
    clearFilter: (state) => {
      const currentFilterData = [...state.filterData];
      const filterData = currentFilterData.map((item) => ({
        ...item,
        checked: false,
      }));
      return { ...state, filterData, chekedIdList: [] };
    },
  },
});
export const { actions, reducer } = filterSlice;
