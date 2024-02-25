import { AppCalendarContext } from '../../contexts';

import { useContext } from 'react';

export const useAppCalendar = () => {
  return useContext(AppCalendarContext);
};
