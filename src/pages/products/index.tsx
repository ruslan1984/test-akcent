import { useEffect, memo, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Presenter from "./Presenter";
import { reducerType } from "store";
import { requestProducts } from "./reducer";

const Products = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pagesCount, products } = useSelector(
    (state: reducerType) => state.productsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts(currentPage));
  }, [dispatch, currentPage]);

  const pageClick = useCallback(
    (page: number) => () => {
      setCurrentPage(page);
    },
    []
  );

  return (
    <Presenter
      data={products}
      currentPage={currentPage}
      pagesCount={pagesCount}
      pageClick={pageClick}
    />
  );
};

export default memo(Products);
