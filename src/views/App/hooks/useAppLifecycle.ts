import type { AppHandlers } from './useAppHandlers.types.ts';

import { useDidMount } from 'utils';

export const useAppLifecycle = ({
  onMount,
}: {
  onMount: ReturnType<AppHandlers['handleMount']>;
}) => {
  useDidMount(onMount);
};
