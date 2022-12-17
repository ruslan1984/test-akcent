import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Presenter from "./Presenter";
import ProductCard from "organisms/productCard";
import { reducerType } from "store";
import { actions, requestProducts } from "./reducer";

const Products = (): JSX.Element => {
  const { pagesCount, products, currentPage } = useSelector(
    (state: reducerType) => state.productsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts(1));
  }, [dispatch]);

  const pageClick = useCallback(
    (page: number) => () => {
      dispatch(actions.setCurrentPage(page));
    },
    [dispatch]
  );

  return (
    <>
      <Presenter
        data={products}
        currentPage={currentPage}
        pagesCount={pagesCount}
        pageClick={pageClick}
      />
      <ProductCard />
    </>
  );
};

export default memo(Products);
