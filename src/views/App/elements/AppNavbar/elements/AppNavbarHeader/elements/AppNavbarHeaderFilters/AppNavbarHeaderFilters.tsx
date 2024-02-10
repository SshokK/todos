import type { FC } from 'react';
import type { AppNavbarHeaderFiltersProps } from './AppNavbarHeaderFilters.types.ts';

import * as components from 'components';
import * as constants from './AppNavbarHeaderFilters.constants.ts';
import * as styles from './AppNavbarHeaderFilters.styles.ts';

import { useTranslation } from 'react-i18next';
import {
  useAppNavbarHeaderFiltersData,
  useAppNavbarHeaderFiltersHandlers,
} from './hooks';

export const AppNavbarHeaderFilters: FC<AppNavbarHeaderFiltersProps> = ({
  filters,
  onFiltersChange,
}) => {
  const { t } = useTranslation();

  const { formattedData } = useAppNavbarHeaderFiltersData({
    filters,
  });

  const handlers = useAppNavbarHeaderFiltersHandlers({
    props: {
      filters,
      onFiltersChange,
    },
  });

  return (
    <components.Popover
      content={
        <div className={styles.CLASSNAMES.filtersContainer}>
          {constants.FILTERS.map((filter) => {
            const Component = constants.FILTER_TYPE_COMPONENT[filter.type];
            return (
              <Component
                key={filter.key}
                label={t(filter.labelTranslationPath)}
                value={filters?.[filter.key]}
                onChange={handlers.handleFilterChange(filter.key)}
                {...filter.filterComponentProps}
              />
            );
          })}
        </div>
      }
    >
      <components.IconButton
        type={components.ICON_BUTTON_TYPE.SECONDARY}
        size={components.ICON_BUTTON_SIZE.LG}
        Icon={components.IconFilers}
        badge={formattedData.appliedFiltersCount}
      />
    </components.Popover>
  );
};
