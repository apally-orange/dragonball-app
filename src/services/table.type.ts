export type PaginationParams = { pageIndex: number; pageSize: number };
export type Filters<T> = Partial<T & PaginationParams>;