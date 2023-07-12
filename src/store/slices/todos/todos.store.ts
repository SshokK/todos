import type { TodosState } from './todos.store.types.ts';
import type { Slice } from '../../store.types.ts';

import * as helpers from './todos.helpers.ts';
import * as mocks from './todos.mocks.ts';
import * as utils from 'utils';

export const todosStore: Slice<TodosState> = (set) => ({
  todos: mocks.MOCK_TODOS,

  setTodos: (todos) => {
    set(() => ({
      todos,
    }));
  },

  addTodo: (todo) =>
    set((state) => {
      const today = utils.getToday().toDateString();

      return {
        todos: {
          ...state.todos,
          [today]: [todo, ...(state.todos[today] ?? [])],
        },
      };
    }),

  deleteTodo: (todoId) => {
    set((state) => ({
      todos: Object.fromEntries(
        Object.entries(state.todos).map(([date, todos]) => {
          return [date, todos.filter((todo) => todo.id !== todoId)];
        }),
      ),
    }));
  },

  toggleTodo: (todoId, isDone) => {
    set((state) => ({
      todos: helpers.updateTodo({
        todos: state.todos,
        todoId: todoId,
        patch: {
          isDone,
        },
      }),
    }));
  },

  setTodoTitle: (todoId, title) => {
    set((state) => ({
      todos: helpers.updateTodo({
        todos: state.todos,
        todoId: todoId,
        patch: {
          title,
        },
      }),
    }));
  },

  setTodoDate: (todoId, newDate) => {
    set((state) => ({
      todos: helpers.moveTodo({
        todos: state.todos,
        todoId: todoId,
        newDate: newDate,
      }),
    }));
  },

  setTodoContent: (todoId, content) => {
    set((state) => ({
      todos: helpers.updateTodo({
        todos: state.todos,
        todoId: todoId,
        patch: {
          content,
        },
      }),
    }));
  },
});
