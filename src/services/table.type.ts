export type PaginationParams = { pageIndex: number; pageSize: number };
export type Filters<T> = Partial<T & PaginationParams>;
export type CharacterFilters = Filters<Character>;