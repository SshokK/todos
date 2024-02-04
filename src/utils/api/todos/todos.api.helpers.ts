import type {
  FetchTodosCountByDaysResponse,
  Todo,
  TodoFromResponse,
} from './todos.api.types.ts';

import * as stringUtils from '../../string';
import * as dateUtils from '../../date';
import { TodoCountByDay } from './todos.api.types.ts';

export const normalizeTodos = (
  todosFromResponse: Partial<TodoFromResponse>[],
): Todo[] => {
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
  todosCountByDaysResponse: FetchTodosCountByDaysResponse,
): TodoCountByDay[] => {
  return todosCountByDaysResponse.map((entry) => ({
    dateRangeStart: new Date(entry.dateRangeStart),
    dateRangeEnd: new Date(entry.dateRangeEnd),
    count: entry.count,
  }));
};
