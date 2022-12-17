import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { reducerType } from "store";
import { actions } from "pages/basket/reducer";
import { actions as productActions } from "pages/products/reducer";
import Button from "atoms/Button";
import { TProduct } from "./types";

import "./styles.css";

const ProductsItem: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const addToBasket = () => {
    activeProduct && dispatch(actions.addToBasket(activeProduct));
  };
  const [activeProduct, setActiveProduct] = useState<TProduct | undefined>();
  const { activeCardId, products } = useSelector(
    (state: reducerType) => state.productsReducer
  );
  useEffect(() => {
    if (activeCardId) {
      const product = products.find(({ id }) => id === activeCardId);
      setActiveProduct(product);
    }
  }, [activeCardId, products]);

  const onCloseClick = () => {
    dispatch(productActions.setActiveCardId(0));
  };

  return (
    <div className={cn("productBlock", { active: activeCardId !== 0 })}>
      <div className="fon" onClick={onCloseClick}></div>
      <div className="productCard">
        <div className="closeBtn" onClick={onCloseClick}>
          x
        </div>
        <img
          className="productCardImg"
          src={`${activeProduct?.image}`}
          alt=""
        />
        <div className="description">
          <div className="title">{activeProduct?.title}</div>
          <div className="data">
            <div>Артикул: {activeProduct?.id}</div>
            <div>Брэнд: {activeProduct?.brand}</div>
            <div>SKU: {activeProduct?.sku}</div>
          </div>
          <div className="price">
            Цена:
            {activeProduct?.regular_price.value}{" "}
            {activeProduct?.regular_price.currency}
          </div>
          <Button onClick={addToBasket} className="priceButton basketBtn">
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductsItem;
export type { TProduct } from "./types";
