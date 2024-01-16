import type { Todo } from './todos.api.types.ts';

import * as stringUtils from '../../string';
import * as dateUtils from '../../date';

export const MOCK_TODOS: Todo[] = [
  {
    id: stringUtils.getRandomId(),
    title: 'Wash my car',
    content: '',
    isDone: true,
    order: 0,
    date: dateUtils.getYesterday().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Go to dentist',
    content: '',
    isDone: false,
    order: 1,
    date: dateUtils.getYesterday().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Buy some coffee',
    content: '',
    isDone: false,
    order: 0,
    date: dateUtils.getToday().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Clean up the house',
    content: '',
    isDone: false,
    order: 1,
    date: dateUtils.getTomorrow().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Get some groceries',
    content: '',
    isDone: false,
    order: 2,
    date: dateUtils.getTomorrow().toDateString(),
  },
  {
    id: stringUtils.getRandomId(),
    title: 'Pet the cat',
    content: '',
    isDone: false,
    order: 3,
    date: dateUtils.getTomorrow().toDateString(),
  },
];
