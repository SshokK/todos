import type { HighlighterState } from '../../HighlighterContext';
import type { MutableRefObject } from 'react';

export type HighlighterContextProviderRefs = {
  timeoutId: MutableRefObject<NodeJS.Timeout | null>;
};

export type HighlighterContextProviderLocalState = {
  element: HighlighterState['element'];
};

export type HighlighterContextProviderLocalAction = {
  setElement: HighlighterState['setElement'];
};

export type HighlighterContextProviderData = {
  refs: HighlighterContextProviderRefs;
  localState: HighlighterContextProviderLocalState;
  localActions: HighlighterContextProviderLocalAction;
};
