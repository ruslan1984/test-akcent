import { TProduct } from "organisms/productItem";

export type TSort = -1 | 0 | 1;

export type TProductsSlice = {
  products: TProduct[];
  pagesCount: number;
  pageSize: number;
  chekedIdList: number[];
  sortByPrice: TSort;
  currentPage: number;
  activeCardId?: number;
};

export type { TProduct };
