import type { FC } from 'react';
import type { SidebarProps } from './Sidebar.types.ts';

import * as styles from './Sidebar.styles.ts';
import * as framerMotion from 'framer-motion';
import * as animations from './Sidebar.animations.ts';

import { TYPOGRAPHY_TYPE, TYPOGRAPHY_SIZE } from '../Typography';

import { IconButton } from '../IconButton';
import { IconClose } from '../Icons';
import { Typography } from '../Typography';

import { useSidebars } from 'contexts';

export const Sidebar: FC<SidebarProps> = () => {
  const sidebarsContext = useSidebars();

  return (
    <framerMotion.motion.article
      className={styles.CLASSNAMES.container}
      animate={
        sidebarsContext.sidebar.isOpen
          ? animations.ANIMATION_NAME.OPEN
          : animations.ANIMATION_NAME.CLOSED
      }
      initial={animations.INITIAL}
      variants={animations.VARIANTS}
      transition={animations.TRANSITION}
    >
      <header className={styles.CLASSNAMES.header}>
        {sidebarsContext.sidebar.title && (
          <Typography
            type={TYPOGRAPHY_TYPE.TITLE_2}
            size={TYPOGRAPHY_SIZE.XL}
            className={styles.CLASSNAMES.title}
          >
            {sidebarsContext.sidebar.title}
          </Typography>
        )}
        <IconButton
          Icon={IconClose}
          onClick={() => {
            sidebarsContext.sidebar.setIsOpen(false);
            sidebarsContext.navbar.setIsOpen(true);
          }}
        />
      </header>
      <main className={styles.CLASSNAMES.main}>
        {sidebarsContext.sidebar.element}
      </main>
    </framerMotion.motion.article>
  );
};
