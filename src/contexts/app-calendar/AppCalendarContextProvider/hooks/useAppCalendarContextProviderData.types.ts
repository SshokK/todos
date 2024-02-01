import type { AppCalendarState } from '../../AppCalendarContext';

export type AppCalendarContextProviderLocalState = {
  date: AppCalendarState['date'];
  highlightedTodoId: AppCalendarState['highlightedTodoId'];
};

export type AppCalendarContextProviderLocalActions = {
  setDate: AppCalendarState['setDate'];
  setHighlightedTodoId: AppCalendarState['setHighlightedTodoId'];
};

export type AppCalendarContextProviderData = {
  localState: AppCalendarContextProviderLocalState;
  localActions: AppCalendarContextProviderLocalActions;
};
