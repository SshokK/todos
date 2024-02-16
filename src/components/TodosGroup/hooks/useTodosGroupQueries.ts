import type { TodosGroupProps } from '../TodosGroup.types.ts';

import * as utils from '../../../utils';
import * as sortConstants from '../../../constants/sort-constants.ts';
import * as constants from '../TodosGroup.constants.ts';

export const useTodosGroupQueries = ({
  props,
}: {
  props: Pick<TodosGroupProps, 'queryParams' | 'isFetchDisabled'>;
}) => {
  const todosTotalCount = utils.useTodosTotalCount({
    options: {
      isEnabled: !props.isFetchDisabled,
    },
    queryParams: props.queryParams,
  });

  const todos = utils.useTodosList({
    options: {
      isEnabled: !props.isFetchDisabled,
    },
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
