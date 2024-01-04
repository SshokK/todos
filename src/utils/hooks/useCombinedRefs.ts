import type { ForwardedRef, MutableRefObject } from 'react';

import { useEffect } from 'react';

export const useCombinedRefs = <E extends HTMLElement>(
  innerRef: MutableRefObject<E | null>,
  fwdRef: ForwardedRef<E>,
) => {
  useEffect(() => {
    [innerRef, fwdRef].forEach((ref) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(innerRef.current || null);
        } else {
          ref.current = innerRef.current || null;
        }
      }
    });
  }, [innerRef, fwdRef]);

  return innerRef;
};
