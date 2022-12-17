import { memo } from "react";
import { useSelector } from "react-redux";
import { reducerType } from "store";
import "./styles.css";
import icon from "./img/basket.png";

const BasketIcon = () => {
  const { basketList } = useSelector(
    (state: reducerType) => state.basketReducer
  );

  return (
    <div className="basketIcon">
      <div className="basketIconCount">{basketList.length}</div>
      <img src={icon} alt="" />
    </div>
  );
};
export default memo(BasketIcon);
