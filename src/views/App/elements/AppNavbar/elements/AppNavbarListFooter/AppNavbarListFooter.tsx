import type { AppNavbarListFooterProps } from './AppNavbarListFooter.types.ts';

import * as react from 'react';
import * as components from 'components';
import * as styles from './AppNavbarListFooter.styles.ts';

export const AppNavbarListFooter = react.forwardRef<
  HTMLDivElement,
  AppNavbarListFooterProps
>(({ context }) => {
  return (
    <components.Loader
      isVisible={context.isFetchingNextPage}
      Component={components.Spinner}
      componentProps={{ width: components.SPINNER_WIDTH.SM }}
      classNames={{
        outerContainer: styles.CLASSNAMES.loader,
      }}
    />
  );
});
