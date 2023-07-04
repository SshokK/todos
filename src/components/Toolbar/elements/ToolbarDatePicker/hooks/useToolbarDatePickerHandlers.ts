import type { ToolbarDatePickerHandlers } from './useToolbarDatePickerHandlers.types.ts';
import type { ToolbarDatepickerProps } from '../ToolbarDatePicker.types.ts';
import type { ToolbarDatePickerData } from './useToolbarDatePickerData.types.ts';

export const useToolbarDatePickerHandlers = ({
  props,
  localActions,
}: {
  props: Pick<ToolbarDatepickerProps, 'onChange'>;
  localActions: ToolbarDatePickerData['localActions'];
}): ToolbarDatePickerHandlers => {
  const handlePopoverOpenChange: ToolbarDatePickerHandlers['handlePopoverOpenChange'] =
    (isOpen) => {
      localActions.setIsOpen(isOpen);
    };

  const handleDateChange: ToolbarDatePickerHandlers['handleDateChange'] = (
    date,
  ) => {
    localActions.setIsOpen(false);

    props.onChange?.(date);
  };

  return {
    handlePopoverOpenChange,
    handleDateChange,
  };
};
