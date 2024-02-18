import type { FC } from 'react';
import type { AppNavbarHeaderProps } from './AppNavbarHeader.types.ts';

import * as constants from './AppNavbarHeader.constants.ts';
import * as components from 'components';
import * as styles from './AppNavbarHeader.styles.ts';
import * as elements from './elements';

import { useTranslation } from 'react-i18next';

export const AppNavbarHeader: FC<AppNavbarHeaderProps> = ({
  searchString,
  filters,
  onSearchChange,
  onSearchButtonClick,
  onFiltersChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.CLASSNAMES.container}>
      <elements.AppNavbarHeaderFilters
        filters={filters}
        onFiltersChange={onFiltersChange}
      />
      <components.TextField
        value={searchString}
        onChange={onSearchChange}
        onSearchButtonClick={onSearchButtonClick}
        changeCallbackThrottleTime={constants.SEARCH_THROTTLE_TIME}
        name={constants.SEARCH_FIELD_NAME}
        classNames={{
          container: styles.CLASSNAMES.searchField,
        }}
        shouldRenderSearchButton
        placeholder={t(
          'views.App.AppNavbar.AppNavbarHeader.searchPlaceholder',
          'Search todos',
        )}
      />
    </div>
  );
};
