import type { AppCalendarContextProviderData } from './useAppCalendarContextProviderData.types.ts';

import { useState } from 'react';

export const useAppCalendarContextProviderData =
  (): AppCalendarContextProviderData => {
    const [date, setDate] = useState<
      AppCalendarContextProviderData['localState']['date']
    >(new Date());

    const [highlightedTodoId, setHighlightedTodoId] =
      useState<
        AppCalendarContextProviderData['localState']['highlightedTodoId']
      >(null);

    const localState: AppCalendarContextProviderData['localState'] = {
      date,
      highlightedTodoId,
    };

    const localActions: AppCalendarContextProviderData['localActions'] = {
      setDate,
      setHighlightedTodoId,
    };

    return {
      localState,
      localActions,
    };
  };
