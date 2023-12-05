import type { HTMLProps } from 'react';

import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames('flex', 'gap-4', 'p-2', 'relative'),

  containerDisabled: classnames('opacity-40'),

  blocker: classnames(
    'absolute',
    'w-full',
    'h-full',
    'cursor-not-allowed',
    'z-10',
    'left-0',
    'top-0',
  ),

  dragZone: classnames('cursor-grab', 'relative'),
  dragZoneGrabHandle: classnames(
    'cursor-grab',
    'absolute',
    'h-full',
    'w-full',
    'top-0',
  ),
  childrenContainer: classnames('w-full'),
};

export const REMOVAL_STYLES: HTMLProps<HTMLDivElement>['style'] = {
  position: 'fixed',
  opacity: 0,
  transitionDuration: '500ms',
  transition: 'all',
  transform: 'scale(0.1)',
};
