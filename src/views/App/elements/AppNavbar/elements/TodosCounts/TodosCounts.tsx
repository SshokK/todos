import type { FC } from 'react';

import * as components from 'components';
import * as styles from './TodosCounts.styles.ts';
import * as constants from './TodosCounts.constants.ts';

import { useTranslation } from 'react-i18next';
import { useTodosCountsQueries } from './hooks';

export const TodosCounts: FC = () => {
  const { t } = useTranslation();

  const queries = useTodosCountsQueries();

  return (
    <components.Separator>
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
                  isLoading={queries.todosCounts.isFetching}
                  Icon={config.Icon}
                  classNames={{
                    container:
                      styles.CLASSNAMES[
                        countType as constants.TODOS_COUNT_TYPE
                      ],
                  }}
                />
                <div className={styles.CLASSNAMES.countBadge}>
                  {queries.todosCounts.data[config.dataKey]}
                </div>
              </div>
            </components.Tooltip>
          ),
        )}
      </div>
    </components.Separator>
  );
};
