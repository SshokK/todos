import type { MotionStyle } from 'framer-motion';

import classnames from 'classnames';

export const CLASSNAMES = {
  container: classnames('flex', 'gap-4', 'p-2'),
  dragButton: classnames(),
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

export const REMOVAL_STYLES: MotionStyle = {
  position: 'fixed',
  opacity: 0,
  transitionDuration: '500ms',
  transition: 'all',
  transform: 'scale(0.1)',
};
