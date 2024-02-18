import type * as sortConstants from '../constants/sort-constants.ts';

export type QuerySelector<R, D> = (response: R) => D;

export type InfiniteQuerySelector<R, D, P> = (args: {
  pageParams: P[];
  pages: R[];
}) => D;

export type ListQueryParams = {
  limit: number;
  offset: number;
};

export type SortQueryParams<T extends string> = {
  sortField?: T;
  sortOrder?: sortConstants.SORT_ORDER;
};
