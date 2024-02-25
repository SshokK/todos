import type * as react from 'react';

export type TodoCardSkeletonProps = {
  isLoading?: boolean;
  children?: react.ReactNode;
  classNames?: {
    skeleton?: string;
  };
};
