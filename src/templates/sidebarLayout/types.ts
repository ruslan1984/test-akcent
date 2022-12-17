export type TFilterSlice = {
  filterData: TFilterData[];
  loading: boolean;
  error?: string;
  chekedIdList: number[];
};

export type TFilterData = {
  id: number;
  title: string;
  sort: number | string;
  code: string;
  checked?: boolean;
};
