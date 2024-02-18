import type { AppNavbarEmptyPlaceholderProps } from './AppNavbarEmptyPlaceholder.types.ts';

import * as react from 'react';
import * as components from 'components';
import * as styles from './AppNavbarEmptyPlaceholder.styles.ts';

import { useTranslation } from 'react-i18next';

export const AppNavbarEmptyPlaceholder: react.FC<
  AppNavbarEmptyPlaceholderProps
> = ({ context }) => {
  const { t } = useTranslation();

  if (context.isInitialLoading) {
    return (
      <components.Loader
        isVisible
        Component={components.Spinner}
        componentProps={{ width: components.SPINNER_WIDTH.SM }}
        classNames={{
          outerContainer: styles.CLASSNAMES.loader,
        }}
      />
    );
  }

  return (
    <components.NoItemsMessage isVisible>
      {context.searchString
        ? t('views.App.AppNavbar.noSearchResults', 'No todos matching search')
        : t('views.App.AppNavbar.noResultsForToday', 'No todos')}
    </components.NoItemsMessage>
  );
};
