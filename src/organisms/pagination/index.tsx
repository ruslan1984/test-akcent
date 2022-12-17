import { FC } from "react";
import InlinePresenter from "./InlinePresenter";
import MenuPresenter from "./MenuPresenter";
import "./styles.css";

interface IPagination {
  pagesCount: number;
  currentPage: number;
  pageClick: (page: number) => () => void;
}

const Pagination: FC<IPagination> = ({
  pagesCount,
  currentPage,
  pageClick,
}: IPagination): JSX.Element | null => {
  if (pagesCount <= 1) {
    return null;
  }
  if (pagesCount <= 10) {
    return (
      <InlinePresenter
        currentPage={currentPage}
        pagesCount={pagesCount}
        pageClick={pageClick}
      />
    );
  }
  return (
    <MenuPresenter
      currentPage={currentPage}
      pagesCount={pagesCount}
      pageClick={pageClick}
    />
  );
};
export default Pagination;
