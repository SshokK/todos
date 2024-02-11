import type { TodosGroupProps } from '../TodosGroup.types.ts';

import * as utils from '../../../utils';
import * as sortConstants from '../../../constants/sort-constants.ts';
import * as constants from '../TodosGroup.constants.ts';

export const useTodosGroupQueries = ({
  props,
}: {
  props: Pick<TodosGroupProps, 'queryParams'>;
}) => {
  const todosTotalCount = utils.useTodosTotalCount({
    queryParams: props.queryParams,
  });

  const todos = utils.useTodosList({
    queryParams: {
      ...props.queryParams,
      limit: constants.VISIBLE_TODOS_COUNT,
      offset: 0,
      sortField: 'order',
      sortOrder: sortConstants.SORT_ORDER.ASC,
    },
  });

  return {
    todosTotalCount,
    todos,
  };
};
