import type { TooltipProps } from './Tooltip.types';

import * as react from 'react';
import * as reactTooltip from '@radix-ui/react-tooltip';
import * as styles from './Tooltip.styles';

export const Tooltip = react.forwardRef<HTMLButtonElement, TooltipProps>(
  ({ title, children, isOpen, side }, ref) => {
    return (
      <reactTooltip.Provider delayDuration={0}>
        <reactTooltip.Root open={isOpen}>
          <reactTooltip.Trigger ref={ref} asChild>
            {children}
          </reactTooltip.Trigger>
          <reactTooltip.Portal>
            <reactTooltip.Content
              side={side}
              className={styles.CLASSNAMES.content}
              sideOffset={15}
            >
              {title}
              <reactTooltip.Arrow className={styles.CLASSNAMES.arrow} />
            </reactTooltip.Content>
          </reactTooltip.Portal>
        </reactTooltip.Root>
      </reactTooltip.Provider>
    );
  },
);
