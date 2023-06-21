import type { FC } from 'react';
import type { SidebarsContextProviderProps } from './SidebarsContextProvider.types.ts';

import * as components from 'components';
import * as styles from './SidebarsContextProvider.styles.ts';

import { SidebarsContext } from '../SidebarsContext';

import { useSidebarContextProviderData } from './hooks';

export const SidebarsContextProvider: FC<SidebarsContextProviderProps> = ({
  children,
}) => {
  const { localState, localActions } = useSidebarContextProviderData();

  return (
    <SidebarsContext.Provider
      value={{
        sidebar: {
          isOpen: localState.isSidebarOpen,
          title: localState.sidebarTitle,
          element: localState.sidebarElement,
          setIsOpen: localActions.setIsSidebarOpen,
          setTitle: localActions.setSidebarTitle,
          setElement: localActions.setSidebarElement,
        },
        navbar: {
          isOpen: localState.isNavbarOpen,
          element: localState.navbarElement,
          setIsOpen: localActions.setIsNavbarOpen,
          setElement: localActions.setNavbarElement,
        },
      }}
    >
      <section className={styles.CLASSNAMES.container}>
        <components.Navbar />
        <main className={styles.CLASSNAMES.main}>{children}</main>
        <components.Sidebar />
      </section>
    </SidebarsContext.Provider>
  );
};
