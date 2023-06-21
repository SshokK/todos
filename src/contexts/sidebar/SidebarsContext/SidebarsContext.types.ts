import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type SidebarsState = {
  sidebar: {
    isOpen: boolean;
    title: ReactNode;
    element: ReactNode;

    setIsOpen: Dispatch<SetStateAction<SidebarsState['sidebar']['isOpen']>>;
    setTitle: Dispatch<SetStateAction<SidebarsState['sidebar']['title']>>;
    setElement: Dispatch<SetStateAction<SidebarsState['sidebar']['element']>>;
  };
  navbar: {
    isOpen: boolean;
    element: ReactNode;

    setIsOpen: Dispatch<SetStateAction<SidebarsState['navbar']['isOpen']>>;
    setElement: Dispatch<SetStateAction<SidebarsState['navbar']['element']>>;
  };
};
