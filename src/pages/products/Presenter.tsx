import { Fragment, FC, memo } from "react";
import MainLayout from "templates/mainLayout";
import SidebarLayout from "templates/sidebarLayout";
import Pagination from "organisms/pagination";
import ProductsItem, { TProduct } from "organisms/productItem";
import Sorting from "./sorting";
import "./styles.css";

interface IPresenter {
  currentPage: number;
  pagesCount: number;
  data?: TProduct[];
  pageClick: (page: number) => () => void;
}

const Presenter: FC<IPresenter> = ({
  currentPage,
  data,
  pagesCount,
  pageClick,
}: IPresenter) => (
  <MainLayout>
    <h1 className="productsTitle">Товары</h1>
    <SidebarLayout>
      <Sorting />
      <div className="productsList">
        {!data?.length || data.length === 0 ? (
          <div className="isEmpty">Товаров нет</div>
        ) : (
          data.map((item) => (
            <Fragment key={item.id}>
              <ProductsItem data={item} />
            </Fragment>
          ))
        )}
      </div>
    </SidebarLayout>
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      pageClick={pageClick}
    />
  </MainLayout>
);

export default memo(Presenter);
