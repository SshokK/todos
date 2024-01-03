import type { ReactNode } from 'react';

export type AppHandlers = {
  handleMount: (navbarElement: ReactNode) => () => void;
};
