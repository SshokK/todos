import type { FC } from 'react';

import * as elements from './elements';

import { useAppHandlers, useAppLifecycle } from './hooks';

export const App: FC = () => {
  const handlers = useAppHandlers();

  useAppLifecycle({
    onMount: handlers.handleMount(<elements.AppNavbar />),
  });

  return (
    <>
      <elements.AppHeader />
      <elements.AppCalendar />
    </>
  );
};
