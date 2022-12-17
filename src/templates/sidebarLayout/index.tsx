import { FC, ChangeEvent, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, requestBrends, submitFilter } from "./reducer";
import { reducerType } from "store";
import CheckboxItem from "atoms/CheckboxItem";
import Button from "atoms/Button";
import "./styles.css";

interface ISidebarLayout {
  children: JSX.Element | JSX.Element[] | string;
}

const SidebarLayout: FC<ISidebarLayout> = ({ children }: ISidebarLayout) => {
  const dispatch = useDispatch();
  const { filterData } = useSelector(
    (state: reducerType) => state.sidebarReducer
  );
  useEffect(() => {
    dispatch(requestBrends());
  }, [dispatch]);

  const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const id = (e.target as HTMLInputElement).getAttribute("id");
    id && dispatch(actions.updateFilter(Number(id)));
  };
  const submitFilterClick = () => {
    dispatch(submitFilter());
  };
  const clearFilterClick = () => {
    dispatch(actions.clearFilter());
  };

  return (
    <div className="sideBar">
      <div>
        <h3>Бренды</h3>
        <div className="filter">
          {filterData.map(({ id, title, checked }) => (
            <CheckboxItem
              key={id}
              id={id}
              onCheckboxClick={onCheckboxClick}
              title={title}
              checked={checked}
            />
          ))}
        </div>
        <div className="sidebarButtons">
          <Button onClick={submitFilterClick}>Применить</Button>
          <Button onClick={clearFilterClick}>Сбросить</Button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default memo(SidebarLayout);
