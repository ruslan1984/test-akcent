import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { TBasketItem } from "../types";
import { actions } from "../reducer";
import "./styles.css";

const BasketItem: FC<TBasketItem> = ({
  id,
  image,
  title,
  sku,
  brand,
  regular_price,
  count,
}: TBasketItem): JSX.Element => {
  const dispatch = useDispatch();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeCount({ id, count: Number(e.target.value) }));
  };
  const removeBtn = () => {
    dispatch(actions.removeProduct(id));
  };
  return (
    <>
      <div className="basketItem">
        <img className="basketItemImg" src={image} alt="" />
        <div className="basketData">
          <div className="title">{title}</div>
          <div className="basketItemDescription">
            <div>Артикул: {id}</div>
            <div>sku: {sku}</div>
            <div>Брэнд: {brand}</div>
          </div>
        </div>
        <div className="priceBlock">
          <div>
            Цена:
            <div className="price">
              {regular_price.value} {regular_price.currency}
            </div>
          </div>
          <input
            className="input"
            onChange={onChange}
            type="number"
            min="0"
            value={count}
          />
        </div>
        <div className="removeBtn" onClick={removeBtn}>
          x
        </div>
      </div>
    </>
  );
};

export default BasketItem;
