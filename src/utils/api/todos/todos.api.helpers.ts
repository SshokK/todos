import type * as apiTypes from './todos.api.types.ts';

import * as stringUtils from '../../string';
import * as dateUtils from '../../date';

export const normalizeTodos = (
  todosFromResponse: Partial<apiTypes.TodoFromResponse>[],
): apiTypes.Todo[] => {
  if (!Array.isArray(todosFromResponse)) {
    return [];
  }

  return todosFromResponse.map((todo) => ({
    ...todo,
    id: todo.id || stringUtils.getRandomId(),
    title: todo.title || '',
    content: todo.content || '',
    order: todo.order || 1,
    isDone: todo.isDone || false,
    date: todo.date ? new Date(todo.date) : dateUtils.getToday(),
  }));
};

export const normalizeTodosCountByDays = (
  todosCountByDaysResponse: apiTypes.FetchTodosCountByDaysResponse,
): apiTypes.TodoCountByDay[] => {
  return todosCountByDaysResponse.map((entry) => {
    return {
      date: new Date(entry.date),
      count: entry.count,
    };
  });
};
