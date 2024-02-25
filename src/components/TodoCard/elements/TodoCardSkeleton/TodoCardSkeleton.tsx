import type { TodoCardSkeletonProps } from './TodoCardSkeleton.types.ts';

import * as react from 'react';
import * as framerMotion from 'framer-motion';

import { Skeleton } from '../../../Skeleton';
import { FadeIn } from '../../../Animations';

export const TodoCardSkeleton: react.FC<TodoCardSkeletonProps> = ({
  isLoading,
  children,
  classNames,
}) => {
  return (
    <framerMotion.AnimatePresence mode="wait">
      {isLoading && (
        <FadeIn>
          <Skeleton className={classNames?.skeleton} />
        </FadeIn>
      )}
      {!isLoading && (
        <FadeIn>
          <framerMotion.motion.span>{children}</framerMotion.motion.span>
        </FadeIn>
      )}
    </framerMotion.AnimatePresence>
  );
};
