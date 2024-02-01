import type * as react from 'react';
import type * as utils from '../../../utils';

export type AppCalendarState = {
  date: Date;
  highlightedTodoId: utils.Todo['id'] | null;

  setDate: react.Dispatch<react.SetStateAction<AppCalendarState['date']>>;
  setHighlightedTodoId: react.Dispatch<
    react.SetStateAction<AppCalendarState['highlightedTodoId']>
  >;
};
