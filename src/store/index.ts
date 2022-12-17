import { combineReducers } from "redux";
import { reducer as productsReducer } from "pages/products/reducer";
import { reducer as basketReducer } from "pages/basket/reducer";
import { reducer as sidebarReducer } from "templates/sidebarLayout/reducer";

export const reducers = combineReducers({
  productsReducer,
  sidebarReducer,
  basketReducer,
});

export type reducerType = ReturnType<typeof reducers>;
export default reducers;
