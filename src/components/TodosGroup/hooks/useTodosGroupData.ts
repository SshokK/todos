import type { TodosGroupProps } from '../TodosGroup.types.ts';
import type { TodosGroupData } from './useTodosGroupData.types.ts';

import * as constants from '../TodosGroup.constants.ts';

import { useMemo } from 'react';

export const useTodosGroupData = (
  props: Pick<TodosGroupProps, 'expectedTodosCount'>,
): TodosGroupData => {
  const formattedData: TodosGroupData['formattedData'] = useMemo(() => {
    const cardsCountToRender =
      (props.expectedTodosCount ?? 0) <= constants.VISIBLE_TODOS_COUNT
        ? props.expectedTodosCount ?? 0
        : constants.VISIBLE_TODOS_COUNT;

    return {
      cardsCountToRender,
    };
  }, [props.expectedTodosCount]);

  return {
    formattedData,
  };
};
