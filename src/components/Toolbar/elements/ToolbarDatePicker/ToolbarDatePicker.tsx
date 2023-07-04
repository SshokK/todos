import type { FC } from 'react';
import type { ToolbarDatepickerProps } from './ToolbarDatePicker.types.ts';

import { ICON_BUTTON_TYPE } from '../../../IconButton';

import { DatePicker } from '../../../DatePicker';
import { IconButton } from '../../../IconButton';
import { IconCalendar } from '../../../Icons';
import { Popover } from '../../../Popover';

import {
  useToolbarDatePickerData,
  useToolbarDatePickerHandlers,
} from './hooks';

export const ToolbarDatePicker: FC<ToolbarDatepickerProps> = ({
  value,
  onChange,
}) => {
  const { localState, localActions } = useToolbarDatePickerData();

  const handlers = useToolbarDatePickerHandlers({
    props: {
      onChange,
    },
    localActions,
  });

  return (
    <Popover
      isOpen={localState.isOpen}
      onOpenChange={handlers.handlePopoverOpenChange}
      content={
        <DatePicker value={value} onChange={handlers.handleDateChange} />
      }
    >
      <IconButton type={ICON_BUTTON_TYPE.PRIMARY} Icon={IconCalendar} />
    </Popover>
  );
};
