import { FC } from "react";
import cn from "classnames";
import "./styles.css";

interface IPagination {
  pagesCount: number;
  currentPage: number;
  pageClick: (page: number) => () => void;
}

const InlinePresenter: FC<IPagination> = ({
  pagesCount,
  currentPage,
  pageClick,
}: IPagination) => {
  const pages = Array.from(Array(pagesCount).keys());
  return (
    <div className="pagination">
      <div
        className={cn("paginationItem", { disabled: currentPage === 1 })}
        onClick={pageClick(currentPage - 1)}
      >
        &#8592;
      </div>
      {pages.map((item) => (
        <div
          key={item}
          onClick={pageClick(item + 1)}
          className={cn("paginationItem", {
            active: currentPage === item + 1,
          })}
        >
          {item + 1}
        </div>
      ))}
      <div
        className={cn("paginationItem", {
          disabled: currentPage === pages.length,
        })}
        onClick={pageClick(currentPage + 1)}
      >
        &#8594;
      </div>
    </div>
  );
};

export default InlinePresenter;
