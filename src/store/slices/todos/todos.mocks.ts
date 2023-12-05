import type { TodosState } from './todos.store.types.ts';

import * as utils from 'utils';

export const MOCK_TODOS: TodosState['todos'] = {
  [utils.getYesterday().toDateString()]: [
    {
      id: utils.getRandomId(),
      title: 'Wash my car',
      content: '',
      isDone: true,
    },
    {
      id: utils.getRandomId(),
      title: 'Go to dentist',
      content: '',
      isDone: false,
    },
  ],
  [utils.getToday().toDateString()]: [
    {
      id: utils.getRandomId(),
      title: 'Buy some coffee',
      content: '',
      isDone: false,
    },
  ],
  [utils.getTomorrow().toDateString()]: [
    {
      id: utils.getRandomId(),
      title: 'Clean up the house',
      content: '',
      isDone: false,
    },
    {
      id: utils.getRandomId(),
      title: 'Get some groceries',
      content: '',
      isDone: false,
    },
    {
      id: utils.getRandomId(),
      title: 'Pet the cat',
      content: '',
      isDone: false,
    },
  ],
};
