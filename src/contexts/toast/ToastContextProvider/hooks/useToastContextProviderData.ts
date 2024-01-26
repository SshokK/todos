import type { ToastContextProviderData } from './useToastContextProviderData.types.ts';

import * as constants from './useToastContextProviderData.constants.ts';

import { useMemo, useState } from 'react';

export const useToastContextProviderData = (): ToastContextProviderData => {
  const [props, setProps] = useState<
    ToastContextProviderData['localState']['props']
  >(constants.INITIAL_PROPS);
  const [isOpen, setIsOpen] =
    useState<ToastContextProviderData['localState']['isOpen']>(false);

  const localState: ToastContextProviderData['localState'] = {
    isOpen,
    props,
  };

  const localActions: ToastContextProviderData['localActions'] = useMemo(
    () => ({
      setIsOpen,
      setProps,
    }),
    [],
  );

  return {
    localState,
    localActions,
  };
};
