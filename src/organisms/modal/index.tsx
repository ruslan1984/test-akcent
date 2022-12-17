import { FC } from "react";
import cn from "classnames";
import Button from "atoms/Button";
import "./styles.css";

interface IModal {
  isOpen: boolean;
  headText: string;
  text: string;
  onCloseCallback?: () => void;
}

const Modal: FC<IModal> = ({
  isOpen,
  text,
  headText,
  onCloseCallback,
}: IModal) => {
  return (
    <div className={cn("modalBlock", { active: isOpen })}>
      <div className="fon" onClick={onCloseCallback}></div>
      <div className="modal">
        <div className="headText">{headText}</div>
        <div className="text">{text}</div>
        <div className="buttonsBlock">
          <Button className="modalBtn" onClick={onCloseCallback}>
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
