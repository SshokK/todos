import type { FC } from 'react';
import type { HighlighterProps } from './Highlighter.types.ts';

import * as reactDom from 'react-dom';
import * as framerMotion from 'framer-motion';
import * as utils from 'utils';
import * as animations from './Highlighter.animations.ts';
import * as styles from './Highlighter.styles.ts';

import {
  useHighlighterData,
  useHighlighterHandlers,
  useHighlighterLifecycle,
} from './hooks';

export const Highlighter: FC<HighlighterProps> = ({
  element,
  onContainerClick,
}) => {
  const { refs } = useHighlighterData();

  const handlers = useHighlighterHandlers({
    props: {
      element,
    },
    refs,
  });

  useHighlighterLifecycle({
    onElementChange: handlers.handleElementChange,
  });

  return (
    <>
      {reactDom.createPortal(
        <framerMotion.AnimatePresence>
          {element && (
            <framerMotion.motion.div
              ref={refs.container}
              initial={animations.ANIMATION_NAME.ENTER}
              animate={animations.ANIMATION_NAME.ACTIVE}
              exit={animations.ANIMATION_NAME.EXIT}
              variants={animations.VARIANTS}
              className={styles.CLASSNAMES.container}
              onClick={onContainerClick}
            />
          )}
        </framerMotion.AnimatePresence>,
        utils.getRootElement(),
      )}
    </>
  );
};
