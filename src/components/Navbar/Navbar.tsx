import type { FC } from 'react';
import type { NavbarProps } from './Navbar.types.ts';

import * as styles from './Navbar.styles.ts';
import * as framerMotion from 'framer-motion';
import * as animations from './Navbar.animations.ts';
import * as constants from './Navbar.constants.ts';

import { Typography, TYPOGRAPHY_TYPE } from '../Typography';
import { IconGithub, IconLinkedIn } from '../Icons';

import { useSidebars } from 'contexts';

export const Navbar: FC<NavbarProps> = () => {
  const sidebarsContext = useSidebars();

  return (
    <framerMotion.AnimatePresence initial={false}>
      <framerMotion.motion.nav
        className={styles.CLASSNAMES.nav}
        initial={animations.INITIAL}
        variants={animations.VARIANTS}
        transition={animations.TRANSITION}
        animate={
          sidebarsContext.navbar.isOpen
            ? constants.ANIMATION_NAME.OPEN
            : constants.ANIMATION_NAME.CLOSED
        }
      >
        <div className={styles.CLASSNAMES.navContent}>
          {sidebarsContext.navbar.element}
        </div>
        <footer className={styles.CLASSNAMES.copyright}>
          <Typography
            type={TYPOGRAPHY_TYPE.BODY}
            shouldTruncate
            className={styles.CLASSNAMES.copyrightText}
          >
            © Aleksandr Grudinskiy 2023
          </Typography>
          <span className={styles.CLASSNAMES.links}>
            <a target="_blank" href={import.meta.env.VITE_LINKEDIN_LINK}>
              <IconLinkedIn />
            </a>
            <a target="_blank" href={import.meta.env.VITE_GITHUB_LINK}>
              <IconGithub />
            </a>
          </span>
        </footer>
      </framerMotion.motion.nav>
    </framerMotion.AnimatePresence>
  );
};
