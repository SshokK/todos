import type { HighlighterContextProviderData } from './useHighlighterContextProviderData.types.ts';
import type { HighlighterContextProviderHandlers } from './useHighlighterContextProviderHandlers.types.ts';

import * as constants from '../HighlighterContextProvider.constants.ts';

import { useCallback } from 'react';
import { usePreviousValue } from 'utils';

export const useHighlighterContextProviderHandlers = ({
  refs,
  localState,
  localActions,
}: {
  refs: HighlighterContextProviderData['refs'];
  localState: HighlighterContextProviderData['localState'];
  localActions: HighlighterContextProviderData['localActions'];
}): HighlighterContextProviderHandlers => {
  const prevLocalState = usePreviousValue(localState);

  const handleHighlighterContainerClick: HighlighterContextProviderHandlers['handleHighlighterContainerClick'] =
    () => {
      localActions.setElement(null);
    };

  const handleElementChange: HighlighterContextProviderHandlers['handleElementChange'] =
    useCallback(() => {
      if (localState.element !== prevLocalState.element) {
        if (refs.timeoutId.current) {
          clearTimeout(refs.timeoutId.current);
        }

        if (localState.element) {
          refs.timeoutId.current = setTimeout(() => {
            localActions.setElement(null);
          }, constants.CLOSE_TIMEOUT);
        }

        return () => {
          if (refs.timeoutId.current) {
            clearTimeout(refs.timeoutId.current);
          }
        };
      }
    }, [
      localActions,
      localState.element,
      prevLocalState.element,
      refs.timeoutId,
    ]);

  return {
    handleHighlighterContainerClick,
    handleElementChange,
  };
};
