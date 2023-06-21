import type { ComponentProps } from 'react';
import type { TodoItemHandlers } from './useTodoItemHandlers.types.ts';

import { TOOLBAR_ELEMENT_TYPE } from '../../Toolbar';

import { Toolbar } from '../../Toolbar';
import { IconTrash } from '../../Icons';

import { useMemo } from 'react';

export const useTodoItemToolbarConfig = ({
  onDelete,
}: {
  onDelete: TodoItemHandlers['handleDeletion'];
}) => {
  const config = useMemo(() => {
    const config: ComponentProps<typeof Toolbar>['config'] = [];

    config.push({
      key: 'delete',
      type: TOOLBAR_ELEMENT_TYPE.ACTION,
      props: {
        Icon: IconTrash,
        onClick: onDelete,
      },
    });

    return config;
  }, [onDelete]);

  return config;
};
