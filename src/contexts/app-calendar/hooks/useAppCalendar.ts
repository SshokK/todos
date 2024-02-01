import { AppCalendarContext } from '../AppCalendarContext';

import { useContext } from 'react';

export const useAppCalendar = () => {
  return useContext(AppCalendarContext);
};
