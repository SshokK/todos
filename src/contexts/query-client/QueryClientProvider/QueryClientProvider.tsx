import type { FC } from 'react';
import type { QueryClientProviderProps } from './QueryClientProvider.types.ts';

import * as reactQuery from '@tanstack/react-query';
import * as constants from './QueryClientProvider.constants.ts';

export const QueryClientProvider: FC<QueryClientProviderProps> = ({
  children,
}) => {
  return (
    <reactQuery.QueryClientProvider client={constants.QUERY_CLIENT}>
      {children}
    </reactQuery.QueryClientProvider>
  );
};
