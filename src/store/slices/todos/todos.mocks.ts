import type { TodosState } from './todos.store.types.ts';

import * as utils from 'utils';

export const MOCK_TODOS: TodosState['todos'] = {
  [utils.getYesterday().toDateString()]: [
    {
      id: utils.getRandomId(),
      title: 'Wash my car',
      content: 'Because it looks like shit',
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
      content: 'I could really get some cappuccino',
      isDone: false,
    },
  ],
  [utils.getTomorrow().toDateString()]: [
    {
      id: utils.getRandomId(),
      title: 'Clean up the house',
      content: 'It looks more like a dumpster to me',
      isDone: false,
    },
    {
      id: utils.getRandomId(),
      title: 'Get some groceries',
      content: 'Starving AF',
      isDone: false,
    },
    {
      id: utils.getRandomId(),
      title: 'Jerk off a little bit',
      content: 'I really need to get laid:(',
      isDone: false,
    },
  ],
};
