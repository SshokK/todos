import type { TodosGroupHeaderProps } from './TodosGroupHeader.types.ts';

import * as react from 'react';
import * as components from 'components';
import * as styles from './TodosGroupHeader.styles.ts';
import * as utils from 'utils';
import * as animations from './TodosGroupHeader.animations.ts';

import { useTranslation } from 'react-i18next';

export const TodosGroupHeader = react.forwardRef<
  HTMLParagraphElement,
  TodosGroupHeaderProps
>(({ date, isLoading }, ref) => {
  const { t } = useTranslation();

  return (
    <components.Typography
      ref={ref}
      layout
      type={components.TYPOGRAPHY_TYPE.SUBTITLE}
      className={styles.CLASSNAMES.container}
      textAlignment={components.TYPOGRAPHY_TEXT_ALIGNMENT.LEFT}
      variants={animations.VARIANTS}
      initial={animations.ANIMATION_NAME.ENTER}
      animate={animations.ANIMATION_NAME.ACTIVE}
      exit={animations.ANIMATION_NAME.EXIT}
    >
      {utils.formatHumanizedDate(new Date(date), t)}
      <components.Spinner
        isVisible={isLoading}
        width={components.SPINNER_WIDTH.MD}
      />
    </components.Typography>
  );
});
