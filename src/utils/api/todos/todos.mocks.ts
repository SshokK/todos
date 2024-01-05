import type * as api from './todos.api.ts';

import * as stringUtils from '../../string';
import * as dateUtils from '../../date';

export const MOCK_TODOS = [
  {
    id: stringUtils.getRandomId(),
    title: 'Wash my car',
    content: '',
    isDone: true,
    date: dateUtils.getYesterday().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Go to dentist',
    content: '',
    isDone: false,
    date: dateUtils.getYesterday().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Buy some coffee',
    content: '',
    isDone: false,
    date: dateUtils.getToday().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Clean up the house',
    content: '',
    isDone: false,
    date: dateUtils.getTomorrow().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Get some groceries',
    content: '',
    isDone: false,
    date: dateUtils.getTomorrow().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Pet the cat',
    content: '',
    isDone: false,
    date: dateUtils.getTomorrow().toDateString(),
  },
];

export const MOCK_TODOS_RESPONSE: Awaited<ReturnType<typeof api.fetchTodos>> = {
  result: MOCK_TODOS,
  totalCount: MOCK_TODOS.length,
};
