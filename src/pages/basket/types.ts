import { TProduct } from "organisms/productItem";

export enum OrderStatus {
  await,
  ok,
  error,
}

export type TBasketItem = {
  count?: number;
} & TProduct;

export type TUser = {
  name: string;
  phone: string;
};

export type TBasketSlice = {
  basketList: TBasketItem[];
  totalPrice: number;
  curreny: "RUB" | "USD";
  orderStatus: OrderStatus;
  user: TUser;
};
