import type * as utils from 'utils';

export type TodosGroupProps = {
  queryParams?: Partial<
    Parameters<typeof utils.useTodosList>[0]['queryParams']
  >;
  dateRangeStart: Date;
  dateRangeEnd: Date;
};
