import type { Todo } from './todos.api.types.ts';

import type * as api from './todos.api.ts';

import * as lodash from 'lodash';
import * as dateUtils from '../../date';
import * as dateConstants from '../../../constants/date.constants.ts';

export const formatTodosByDates =
  (options?: {
    isAscSort?: boolean;
    filters?: {
      isDone?: boolean;
      startDate?: Date | null;
      endDate?: Date | null;
      title?: Todo['title'];
    };
  }) =>
  (response: Awaited<ReturnType<typeof api.fetchTodos>>) => {
    const filteredTodos = response.filter((todo) => {
      const hadMatchedTitle = options?.filters?.title
        ? todo.title
            .toLowerCase()
            .includes(options?.filters.title.toLowerCase())
        : true;

      const hasMatchedStatus =
        typeof options?.filters?.isDone === 'boolean'
          ? todo.isDone === options?.filters.isDone
          : true;

      const hasMatchedStartDate = options?.filters?.startDate
        ? dateUtils.isAfter({
            dateA: new Date(todo.date),
            dateB: options?.filters.startDate,
            granularity: dateConstants.DATE_GRANULARITY.DAY,
            isDateAIncluded: true,
          })
        : true;

      const hasMatchedEndDate = options?.filters?.endDate
        ? dateUtils.isBefore({
            dateA: new Date(todo.date),
            dateB: options?.filters?.endDate,
            granularity: dateConstants.DATE_GRANULARITY.DAY,
            isDateAIncluded: true,
          })
        : true;

      return (
        hadMatchedTitle &&
        hasMatchedStatus &&
        hasMatchedStartDate &&
        hasMatchedEndDate
      );
    });

    const filteredAndSortedTodos = filteredTodos.sort((todoA, todoB) => {
      return options?.isAscSort
        ? todoB.order - todoA.order
        : todoA.order - todoB.order;
    });

    const filteredAndSortedTodosWithGroupDates = filteredAndSortedTodos.map(
      (todo) => ({
        ...todo,
        groupDate: new Date(todo.date).toDateString(),
      }),
    );

    return lodash.groupBy(filteredAndSortedTodosWithGroupDates, 'groupDate');
  };
