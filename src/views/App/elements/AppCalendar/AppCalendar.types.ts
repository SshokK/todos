import type { ComponentProps } from 'react';
import type * as elements from './elements';

export type AppCalendarProps = {
  headerTools: ComponentProps<typeof elements.AppCalendarHeader>['tools'];
};
