import type * as apiTypes from './todos.api.types.ts';

import * as promiseUtils from '../../promise';
import * as mocks from './todos.mocks.ts';

export const fetchTodos: apiTypes.FetchTodos = async () => {
  await promiseUtils.delay(2000);

  return mocks.MOCK_TODOS_RESPONSE;
};
