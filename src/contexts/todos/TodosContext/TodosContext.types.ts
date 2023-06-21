import type { Dispatch, SetStateAction } from 'react';

export type Todo = {
  id: number;
  title: string;
  content: string;
  date: string;
  isDone: boolean;
};

export type TodosState = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<TodosState['todos']>>;
};
