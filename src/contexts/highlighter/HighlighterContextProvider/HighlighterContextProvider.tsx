import type { FC } from 'react';
import type { HighlighterContextProviderProps } from './HighlighterContextProvider.types.ts';

import * as components from 'components';

import { HighlighterContext } from '../HighlighterContext';

import {
  useHighlighterContextProviderData,
  useHighlighterContextProviderHandlers,
  useHighlighterContextProviderLifecycle,
} from './hooks';

export const HighlighterContextProvider: FC<
  HighlighterContextProviderProps
> = ({ children }) => {
  const { refs, localState, localActions } =
    useHighlighterContextProviderData();

  const handlers = useHighlighterContextProviderHandlers({
    refs,
    localState,
    localActions,
  });

  useHighlighterContextProviderLifecycle({
    onElementChange: handlers.handleElementChange,
  });

  return (
    <HighlighterContext.Provider
      value={{
        element: localState.element,
        setElement: localActions.setElement,
      }}
    >
      <components.Highlighter
        element={localState.element}
        onContainerClick={handlers.handleHighlighterContainerClick}
      />
      {children}
    </HighlighterContext.Provider>
  );
};
