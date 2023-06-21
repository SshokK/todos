import type { SidebarsState } from '../../SidebarsContext';

export type SidebarContextProviderLocalState = {
  isSidebarOpen: SidebarsState['sidebar']['isOpen'];
  isNavbarOpen: SidebarsState['navbar']['isOpen'];
  sidebarTitle: SidebarsState['sidebar']['title'];
  sidebarElement: SidebarsState['sidebar']['element'];
  navbarElement: SidebarsState['navbar']['element'];
};

export type SidebarContextProviderLocalActions = {
  setIsSidebarOpen: SidebarsState['sidebar']['setIsOpen'];
  setIsNavbarOpen: SidebarsState['navbar']['setIsOpen'];
  setSidebarTitle: SidebarsState['sidebar']['setTitle'];
  setNavbarElement: SidebarsState['navbar']['setElement'];
  setSidebarElement: SidebarsState['sidebar']['setElement'];
};

export type SidebarContextProviderData = {
  localState: SidebarContextProviderLocalState;
  localActions: SidebarContextProviderLocalActions;
};
