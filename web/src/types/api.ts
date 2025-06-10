export type Response<T extends object = object> = {
  message: string;
  data?: T;
};

export type ResponseWithList<T extends object = object> = Response<{
  records: T[];
  maxPage: number;
  pageSize: number;
  currentPage: number;
  total: number;
}>;
