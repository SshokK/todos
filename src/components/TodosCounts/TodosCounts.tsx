import type { FC } from 'react';
import type { TodosCountsProps } from './TodosCounts.types.ts';

import * as components from '../index.ts';
import * as styles from './TodosCounts.styles.ts';
import * as constants from './TodosCounts.constants.ts';

import { useTranslation } from 'react-i18next';

export const TodosCounts: FC<TodosCountsProps> = ({
  counts,
  isLoading,
  classNames,
}) => {
  const { t } = useTranslation();

  return (
    <components.Separator className={classNames?.container}>
      <div className={styles.CLASSNAMES.iconsContainer}>
        {Object.entries(constants.TODOS_COUNT_CONFIG).map(
          ([countType, config]) => (
            <components.Tooltip
              key={countType}
              title={t(
                config.tooltipTitleTranslation,
                config.tooltipTitleFallback,
              )}
            >
              <div className={styles.CLASSNAMES.countContainer}>
                <components.IconLoader
                  isLoading={isLoading}
                  Icon={config.Icon}
                  spinnerWidth={components.SPINNER_WIDTH.SM}
                  classNames={{
                    container:
                      styles.CLASSNAMES[
                        countType as constants.TODOS_COUNT_TYPE
                      ],
                  }}
                />
                <div className={styles.CLASSNAMES.countBadge}>
                  {counts[countType as constants.TODOS_COUNT_TYPE]}
                </div>
              </div>
            </components.Tooltip>
          ),
        )}
      </div>
    </components.Separator>
  );
};
