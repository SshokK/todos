import type { ClearButtonData } from './useClearButtonData.types.ts';
import type { ClearButtonHandlers } from './useClearButtonHandlers.types.ts';

import * as constants from '../ClearButton.constants.ts';

import { useTodosBulkDelete } from '../../../utils';

export const useClearButtonHandlers = ({
  localActions,
}: {
  localActions: ClearButtonData['localActions'];
}): ClearButtonHandlers => {
  const todosBulkDelete = useTodosBulkDelete();

  const handlePopoverToggle: ClearButtonHandlers['handlePopoverToggle'] =
    (isOpen) => () => {
      localActions.setIsOpen(isOpen);
    };

  const handleOptionClick: ClearButtonHandlers['handleOptionClick'] =
    (type) => () => {
      localActions.setIsOpen(false);

      todosBulkDelete.mutate(
        constants.CLEAR_REQUEST_BODY_GETTERS[type as constants.CLEAR_TYPE](),
      );
    };

  return {
    handlePopoverToggle,
    handleOptionClick,
  };
};
