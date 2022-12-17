import { useCallback, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../reducer";
import { TSort } from "../types";

const Sorting = () => {
  const dispatch = useDispatch();
  const onChangeSort = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const sort: TSort = Number(e.target.value) as TSort;
      dispatch(actions.setSortByPrice(sort));
    },
    [dispatch]
  );
  return (
    <div className="sortingBlock">
      <div className="title">Соктировка</div>
      <select onChange={onChangeSort} className="select" name="" id="">
        <option value="0">Не сортировать</option>
        <option value="-1">По возрастанию цены</option>
        <option value="1">По убыванию цены цены</option>
      </select>
    </div>
  );
};

export default Sorting;
