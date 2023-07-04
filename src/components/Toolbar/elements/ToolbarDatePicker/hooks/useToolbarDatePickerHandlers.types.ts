import type { ComponentProps } from 'react';
import type { DatePicker } from '../../../../DatePicker';
import type { Popover } from '../../../../Popover';

export type ToolbarDatePickerHandlers = {
  handlePopoverOpenChange: ComponentProps<typeof Popover>['onOpenChange'];
  handleDateChange: ComponentProps<typeof DatePicker>['onChange'];
};
