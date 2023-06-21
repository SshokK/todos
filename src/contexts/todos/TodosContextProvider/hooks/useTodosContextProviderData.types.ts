import type { TodosState } from '../../TodosContext';

export type TodosContextProviderLocalState = {
  todos: TodosState['todos'];
};

export type TodosContextProviderLocalActions = {
  setTodos: TodosState['setTodos'];
};

export type TodosContextProviderData = {
  localState: TodosContextProviderLocalState;
  localActions: TodosContextProviderLocalActions;
};
