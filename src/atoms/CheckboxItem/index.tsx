import { FC, ChangeEvent } from "react";
import "./styles.css";

interface ICheckboxItem {
  id: number;
  title: string;
  checked?: boolean;
  onCheckboxClick: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxItem: FC<ICheckboxItem> = ({
  id,
  title,
  checked,
  onCheckboxClick,
}: ICheckboxItem) => {
  return (
    <label className="checkbox checkboxLabel" htmlFor={String(id)}>
      <div key={id}>
        <input
          className="checkboxInput"
          id={String(id)}
          onChange={onCheckboxClick}
          type="checkbox"
          checked={Boolean(checked)}
        />
        {title}
      </div>
    </label>
  );
};
export default CheckboxItem;
