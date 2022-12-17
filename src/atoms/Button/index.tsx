import { FC } from "react";
import "./styles.css";

interface IButton {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<IButton> = ({
  children,
  disabled,
  className,
  onClick,
}: IButton) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
