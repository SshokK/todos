import type { CalendarColumnProps } from '../CalendarColumn.types.ts';
import type { CalendarColumnData } from './useCalendarColumnData.types.ts';

import * as elements from '../elements';
import * as constants from '../CalendarColumn.constants.ts';
import * as lodash from 'lodash';

import { useQuery } from '@tanstack/react-query';

export const useCalendarColumnQueries = ({
  props,
  localState,
  localActions,
}: {
  props: Pick<CalendarColumnProps, 'date' | 'queryOptions'>;
  localState: CalendarColumnData['localState'];
  localActions: CalendarColumnData['localActions'];
}) => {
  const queryParams = {
    limit: constants.LIMIT,
    offset: localState.offset,
    date: props.date,
  };

  useQuery<unknown, Error, elements.CalendarItem[]>({
    enabled: Boolean(props.queryOptions && props.queryOptions.queryKey.length),
    queryKey: [...(props.queryOptions?.queryKey ?? []), queryParams],
    queryFn: async () => {
      const newItems = (await props.queryOptions?.queryFn?.(queryParams)) ?? [];

      localActions.setItems((items) => {
        return lodash.uniqBy([...items, ...newItems], 'id');
      });
    },
  });
};
