import { FC } from "react";
import { Link } from "react-router-dom";
import BaskeIcon from "atoms/BasketIcon";
import "./styles.css";

const Header: FC = () => (
  <header className="header">
    <div>Logo</div>
    <div>
      <Link className="menuItem" to="/">
        На главную
      </Link>
      <Link className="menuItem" to="/products">
        Товары 
      </Link>
    </div>
    <Link className="menuItem" to="/basket">
      <BaskeIcon />
    </Link>
  </header>
);

export default Header;
