import * as utils from '../../utils';

export type TodosCountsProps = {
  queryParams?: Partial<
    Required<Parameters<typeof utils.useTodosCountByStatus>>[0]['queryParams']
  >;
};
