import type { TodosState } from './TodosContext.types.ts';

import { createContext } from 'react';

export const TodosContext = createContext<TodosState>({
  todos: [],
  setTodos: () => null,
});
