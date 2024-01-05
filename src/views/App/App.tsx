import type { FC } from 'react';

import * as elements from './elements';
import * as components from 'components';

import { useAppHandlers, useAppLifecycle } from './hooks';

export const App: FC = () => {
  const handlers = useAppHandlers();

  useAppLifecycle({
    onMount: handlers.handleMount(<elements.AppNavbar />),
  });

  return (
    <>
      <elements.AppCalendar headerTools={<components.LanguagesMenu />} />
    </>
  );
};
