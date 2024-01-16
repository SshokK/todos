import type { GlobalState } from '../../store.types.ts';

export const getAppCalendarState = (state: GlobalState) =>
  state.appCalendarState;

export const getAppCalendarDate = (state: GlobalState) =>
  getAppCalendarState(state).date;

export const getAppCalendarHighlightedTodoId = (state: GlobalState) =>
  getAppCalendarState(state).highlightedTodo;
