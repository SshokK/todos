import type * as react from 'react';
import type * as utils from '../../utils';

export type TodosGroupProps = {
  title?: react.ReactNode;
  queryParams?: Partial<
    Parameters<typeof utils.useTodosList>[0]['queryParams']
  >;
};