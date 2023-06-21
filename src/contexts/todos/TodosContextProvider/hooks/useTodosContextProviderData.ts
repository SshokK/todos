import type { TodosContextProviderData } from './useTodosContextProviderData.types.ts';

import { useMemo, useState } from 'react';

export const useTodosContextProviderData = (): TodosContextProviderData => {
  const [todos, setTodos] = useState<
    TodosContextProviderData['localState']['todos']
  >([]);

  const localState: TodosContextProviderData['localState'] = {
    todos,
  };

  const localActions: TodosContextProviderData['localActions'] = useMemo(
    () => ({
      setTodos,
    }),
    [],
  );

  return {
    localState,
    localActions,
  };
};
