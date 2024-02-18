import * as todosConstants from '../../todos.constants.ts';

export const QUERY_KEYS_TO_INVALIDATE = [
  todosConstants.QUERY_KEY_FACTORY.TODOS_LIST,
  todosConstants.QUERY_KEY_FACTORY.TODOS_COUNT_BY_STATUS,
  todosConstants.QUERY_KEY_FACTORY.TODOS_COUNT_BY_DAYS,
  todosConstants.QUERY_KEY_FACTORY.TODOS_TOTAL_COUNT,
];
