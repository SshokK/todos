import type { FC } from 'react';
import type { TodosContextProviderProps } from './TodosContextProvider.types.ts';

import { TodosContext } from '../TodosContext';

import { useTodosContextProviderData } from './hooks';

export const TodosContextProvider: FC<TodosContextProviderProps> = ({
  children,
}) => {
  const { localState, localActions } = useTodosContextProviderData();

  return (
    <TodosContext.Provider
      value={{
        todos: localState.todos,
        setTodos: localActions.setTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
