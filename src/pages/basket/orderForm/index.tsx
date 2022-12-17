import { FormEvent, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "atoms/Button";
import { sendOrder, actions } from "../reducer";

const OrderForm = () => {
  const [ordering, setOrdering] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setOrdering(true);

    if (!nameRef.current?.value || !phoneRef.current?.value) {
      alert("Заполните все поля");
      return;
    }
    const user = {
      name: nameRef.current?.value,
      phone: phoneRef.current?.value,
    };
    dispatch(actions.updateUserData(user));
    dispatch(sendOrder());
  };
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div className="userData">
          <div className="userDataLine">
            <label className="label" htmlFor="">
              ФИО
            </label>
            <input className="input" ref={nameRef} required type="text" />
          </div>
          <div className="userDataLine">
            <label className="label" htmlFor="">
              Телефон
            </label>
            <input className="input" ref={phoneRef} required type="tel" />
          </div>
        </div>
        <Button disabled={ordering} className="orderBtn">
          Оформить заказ
        </Button>
      </form>
    </>
  );
};

export default OrderForm;
