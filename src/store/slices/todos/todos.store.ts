import type { TodosState } from './todos.store.types.ts';
import type { Slice } from '../../store.types.ts';

import * as helpers from './todos.helpers.ts';
import * as mocks from './todos.mocks.ts';
import * as utils from 'utils';

export const todosStore: Slice<TodosState> = (set) => ({
  todos: mocks.MOCK_TODOS,

  setTodos: (todos) => {
    set((state) => ({
      todosState: {
        ...state.todosState,
        todos,
      },
    }));
  },

  addTodo: (todo) =>
    set((state) => {
      const today = utils.getToday().toDateString();

      return {
        todosState: {
          ...state.todosState,
          todos: {
            ...state.todosState.todos,
            [today]: [...(state.todosState.todos[today] ?? []), todo],
          },
        },
      };
    }),

  deleteTodo: (todoId) => {
    set((state) => ({
      todosState: {
        ...state.todosState,
        todos: helpers.filterTodos({
          todos: state.todosState.todos,
          filter: (todo) => todo.id !== todoId,
        }),
      },
    }));
  },

  deleteEmptyTodos: () => {
    set((state) => ({
      todosState: {
        ...state.todosState,
        todos: helpers.filterTodos({
          todos: state.todosState.todos,
          filter: (todo) => todo.title,
        }),
      },
    }));
  },

  toggleTodo: (todoId, isDone) => {
    set((state) => ({
      todosState: {
        ...state.todosState,
        todos: helpers.updateTodo({
          todos: state.todosState.todos,
          todoId: todoId,
          patch: {
            isDone,
          },
        }),
      },
    }));
  },

  setTodoTitle: (todoId, title) => {
    set((state) => ({
      todosState: {
        ...state.todosState,
        todos: helpers.updateTodo({
          todos: state.todosState.todos,
          todoId: todoId,
          patch: {
            title,
          },
        }),
      },
    }));
  },

  setTodoDate: (todoId, newDate) => {
    set((state) => ({
      todosState: {
        ...state.todosState,
        todos: helpers.moveTodo({
          todos: state.todosState.todos,
          todoId: todoId,
          newDate: newDate,
        }),
      },
    }));
  },

  setTodoContent: (todoId, content) => {
    set((state) => ({
      todosState: {
        ...state.todosState,
        todos: helpers.updateTodo({
          todos: state.todosState.todos,
          todoId: todoId,
          patch: {
            content,
          },
        }),
      },
    }));
  },
});
