import { FC } from "react";
import { TProduct } from "./types";
import Button from "atoms/Button";
import "./styles.css";
import { useDispatch } from "react-redux";
import { actions } from "pages/basket/reducer";

interface IProductsItem {
  data: TProduct;
}

const ProductsItem: FC<IProductsItem> = ({
  data,
}: IProductsItem): JSX.Element => {
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(actions.addToBasket(data));
  };
  return (
    <div className="productsItem">
      <img className="productsItemImg" src={`${data.image}`} alt="" />
      <div className="description">
        <div className="title">{data.title}</div>
        <div className="data">
          <div>Артикул: {data.id}</div>
          <div>Брэнд: {data.brand}</div>
          <div>SKU: {data.sku}</div>
        </div>
        <div className="price">
          {data.regular_price.value} {data.regular_price.currency}
        </div>
        <Button onClick={addToBasket} className="priceButton">
          Добавить в корзину
        </Button>
      </div>
      <div></div>
    </div>
  );
};
export default ProductsItem;
export type { TProduct } from "./types";
