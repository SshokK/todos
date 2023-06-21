import type { FC } from 'react';
import type { NavbarProps } from './Navbar.types.ts';

import * as styles from './Navbar.styles.ts';
import * as framerMotion from 'framer-motion';
import * as animations from './Navbar.animations.ts';
import * as constants from './Navbar.constants.ts';

import { useSidebarsContext } from 'contexts';

export const Navbar: FC<NavbarProps> = () => {
  const sidebarsContext = useSidebarsContext();

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
          © Aleksandr Grudinskiy 2023
        </footer>
      </framerMotion.motion.nav>
    </framerMotion.AnimatePresence>
  );
};
