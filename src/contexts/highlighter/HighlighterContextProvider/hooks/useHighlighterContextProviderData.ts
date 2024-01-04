import type { HighlighterContextProviderData } from './useHighlighterContextProviderData.types.ts';

import { useRef, useState } from 'react';

export const useHighlighterContextProviderData =
  (): HighlighterContextProviderData => {
    const timeoutIdRef: HighlighterContextProviderData['refs']['timeoutId'] =
      useRef(null);

    const refs: HighlighterContextProviderData['refs'] = {
      timeoutId: timeoutIdRef,
    };

    const [element, setElement] =
      useState<HighlighterContextProviderData['localState']['element']>(null);

    const localState: HighlighterContextProviderData['localState'] = {
      element,
    };

    const localActions: HighlighterContextProviderData['localActions'] = {
      setElement,
    };

    return {
      refs,
      localState,
      localActions,
    };
  };
