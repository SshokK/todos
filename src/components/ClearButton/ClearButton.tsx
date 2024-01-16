import type { FC } from 'react';

import * as components from '../index.ts';
import * as constants from './ClearButton.constants.ts';
import * as styles from './ClearButton.styles.ts';

import { useClearButtonData, useClearButtonHandlers } from './hooks';
import { useTranslation } from 'react-i18next';

export const ClearButton: FC = () => {
  const { t } = useTranslation();

  const { localState, localActions } = useClearButtonData();

  const handlers = useClearButtonHandlers({
    localActions,
  });

  return (
    <components.Popover
      isOpen={localState.isOpen}
      onOpenChange={handlers.handlePopoverToggle(!localState.isOpen)}
      content={
        <div className={styles.CLASSNAMES.contentContainer}>
          <components.Typography
            type={components.TYPOGRAPHY_TYPE.SUBTITLE}
            size={components.TYPOGRAPHY_SIZE.SM}
          >
            {t('components.ClearButton.optionsLabel', 'Select a type')}
          </components.Typography>
          <components.Separator />
          <div className={styles.CLASSNAMES.optionsContainer}>
            {Object.entries(constants.CLEAR_OPTIONS).map(([type, option]) => (
              <components.Button
                key={type}
                textAlignment={components.BUTTON_TEXT_ALIGNMENT.LEFT}
                onClick={handlers.handleOptionClick(
                  type as constants.CLEAR_TYPE,
                )}
              >
                {t(option.translationPath, option.translationFallback)}
              </components.Button>
            ))}
          </div>
        </div>
      }
    >
      <components.Tooltip
        title={t('components.ClearButton.tooltip', 'Clear todos')}
        side={components.TOOLTIP_SIDE.TOP}
      >
        <components.IconButton
          size={components.ICON_BUTTON_SIZE.LG}
          type={components.ICON_BUTTON_TYPE.SECONDARY}
          Icon={components.IconArchive}
          onClick={handlers.handlePopoverToggle(true)}
        />
      </components.Tooltip>
    </components.Popover>
  );
};
