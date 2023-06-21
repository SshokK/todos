import type { SidebarContextProviderData } from './useSidebarContextProviderData.types.ts';

import { useMemo, useState } from 'react';

export const useSidebarContextProviderData = (): SidebarContextProviderData => {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState<SidebarContextProviderData['localState']['isNavbarOpen']>(false);
  const [isNavbarOpen, setIsNavbarOpen] =
    useState<SidebarContextProviderData['localState']['isSidebarOpen']>(true);

  const [sidebarElement, setSidebarElement] =
    useState<SidebarContextProviderData['localState']['sidebarElement']>(null);
  const [navbarElement, setNavbarElement] =
    useState<SidebarContextProviderData['localState']['navbarElement']>(null);

  const [sidebarTitle, setSidebarTitle] =
    useState<SidebarContextProviderData['localState']['sidebarTitle']>(null);

  const localState: SidebarContextProviderData['localState'] = {
    isSidebarOpen,
    isNavbarOpen,
    sidebarTitle,
    sidebarElement,
    navbarElement,
  };

  const localActions: SidebarContextProviderData['localActions'] = useMemo(
    () => ({
      setIsSidebarOpen,
      setIsNavbarOpen,
      setSidebarTitle,
      setSidebarElement,
      setNavbarElement,
    }),
    [],
  );

  return {
    localState,
    localActions,
  };
};
