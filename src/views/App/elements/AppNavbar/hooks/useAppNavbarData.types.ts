import type { Todo } from 'contexts';

export type AppNavbarFormattedData = {
  todosForToday: Todo[];
};

export type AppNavbarData = {
  formattedData: AppNavbarFormattedData;
};
