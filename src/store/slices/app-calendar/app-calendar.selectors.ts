import type { GlobalState } from '../../store.types.ts';
import type { Todo } from '../todos';

export const getAppCalendarState = (state: GlobalState) =>
  state.appCalendarState;

export const getAppCalendarDate = (state: GlobalState) =>
  getAppCalendarState(state).date;

export const getAppCalendarHighlightedTodoId = (state: GlobalState) =>
  getAppCalendarState(state).highlightedTodo;

export const isTodoHighlighted = (state: GlobalState, todoId: Todo['id']) => {
  const highlightedTodoId = getAppCalendarHighlightedTodoId(state);

  return highlightedTodoId === todoId;
};
