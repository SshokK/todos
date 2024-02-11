import type { TodosCountsProps } from '../TodosCounts.types.ts';

import * as utils from '../../../utils';

export const useTodosCountsQueries = ({
  props,
}: {
  props: Pick<TodosCountsProps, 'queryParams'>;
}) => {
  const todosCounts = utils.useTodosCountByStatus({
    queryParams: props.queryParams,
  });

  return {
    todosCounts,
  };
};
