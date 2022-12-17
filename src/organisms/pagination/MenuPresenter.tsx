import { FC, useState, useCallback, memo } from "react";
import ClickAwayListener from "react-click-away-listener";
import cn from "classnames";
import "./styles.css";

interface IPagination {
  pagesCount: number;
  currentPage: number;
  pageClick: (page: number) => () => void;
}

const MenuPresenter: FC<IPagination> = ({
  pagesCount,
  currentPage,
  pageClick,
}: IPagination) => {
  const pages = Array.from(Array(pagesCount).keys());
  const [showMenu, setShowMenu] = useState(false);
  const onMenuClick = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);
  const onMenuCloseClick = useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <ClickAwayListener onClickAway={onMenuCloseClick}>
      <div className="pagination">
        <div
          className={cn("paginationItem", { disabled: currentPage === 1 })}
          onClick={pageClick(currentPage - 1)}
        >
          &#8592;
        </div>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            onClick={pageClick(item)}
            className={cn("paginationItem", {
              active: currentPage === item,
            })}
          >
            {item}
          </div>
        ))}
        <div className="paginationMenuBlock" onClick={onMenuClick}>
          {[1, 2, 3, pagesCount - 2, pagesCount - 1, pagesCount].includes(
            currentPage
          ) ? (
            <div className="dots">...</div>
          ) : (
            <>
              <div className="dots">...</div>
              <div className="paginationItem active">{currentPage}</div>
              <div className="dots">...</div>
            </>
          )}
        </div>
        {[pagesCount - 2, pagesCount - 1, pagesCount].map((item) => (
          <div
            key={item}
            onClick={pageClick(item)}
            className={cn("paginationItem", {
              active: currentPage === item,
            })}
          >
            {item}
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
        <div className={cn("paginationBlock", { active: showMenu })}>
          <div onClick={onMenuCloseClick}>
            <div className="close">CLOSE</div>
          </div>
          <div className="paginationMenu">
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
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default memo(MenuPresenter);
