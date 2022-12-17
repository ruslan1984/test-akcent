import { FC, Fragment, memo } from "react";
import MainLayout from "templates/mainLayout";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reducerType } from "store";
import BasketItem from "./basketItem";
import OrderForm from "./orderForm";
import Modal from "organisms/modal";
import { actions } from "./reducer";
import { OrderStatus } from "./types";
import "./styles.css";

const Basket: FC = () => {
  const navigate = useNavigate();
  const { basketList, totalPrice, curreny } = useSelector(
    (state: reducerType) => state.basketReducer
  );
  const { orderStatus } = useSelector(
    (state: reducerType) => state.basketReducer
  );
  const dispatch = useDispatch();

  const onCloseCallback = () => {
    dispatch(actions.setOrderStatus(OrderStatus.await));
    navigate("/");
  };
  return (
    <MainLayout>
      <div className="basket">
        <h1>Корзина</h1>
        {basketList && basketList.length > 0 ? (
          <>
            {basketList?.map(
              ({
                id,
                title,
                regular_price,
                sku,
                brand,
                image,
                count,
                type,
              }) => (
                <Fragment key={id}>
                  <BasketItem
                    id={id}
                    image={image}
                    title={title}
                    sku={sku}
                    brand={brand}
                    regular_price={regular_price}
                    count={count}
                    type={type}
                  />
                </Fragment>
              )
            )}
            <div className="totalPrice">
              Итого: {totalPrice} {curreny}
            </div>
            <OrderForm />
          </>
        ) : (
          <div>Корзина пуста</div>
        )}
        <Modal
          headText="Поздравляем!"
          text="Заказ успешно оформлен"
          onCloseCallback={onCloseCallback}
          isOpen={orderStatus === OrderStatus.ok}
        />
      </div>
    </MainLayout>
  );
};

export default memo(Basket);
