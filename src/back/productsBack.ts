import allProducts from "./products.json";

export const getProducts = (
  page = 1,
  pageSize: number,
  chekedIdList: number[] = [],
  sortPrise: -1 | 0 | 1 = 0
) => {
  if (!pageSize) throw Error("Не указан размер страницы");

  let sortedProducts;
  if (sortPrise !== 0) {
    sortedProducts = [...allProducts].sort((a, b) =>
      a.regular_price.value < b.regular_price.value ? sortPrise : -sortPrise
    );
  } else {
    sortedProducts = [...allProducts];
  }
  let filtredProducs;
  if (chekedIdList.length > 0) {
    filtredProducs = sortedProducts.filter((item) =>
      chekedIdList.includes(item.brand)
    );
  } else {
    filtredProducs = sortedProducts;
  }
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  const products = filtredProducs.slice(start, end);
  return {
    count: filtredProducs.length,
    products,
  };
};
