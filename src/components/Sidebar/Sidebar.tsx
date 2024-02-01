import type { FC } from 'react';
import type { SidebarProps } from './Sidebar.types.ts';

import * as styles from './Sidebar.styles.ts';
import * as elements from './elements';

import { ICON_BUTTON_TYPE, ICON_BUTTON_SIZE } from '../IconButton';
import { TYPOGRAPHY_SIZE, TYPOGRAPHY_TYPE } from '../Typography';

import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import { IconClose } from '../Icons';

import { useSidebars } from 'contexts';

export const Sidebar: FC<SidebarProps> = () => {
  const sidebarsContext = useSidebars();

  return (
    <elements.Container isOpen={sidebarsContext.sidebar.isOpen}>
      <elements.Bar isOpen={sidebarsContext.sidebar.isOpen}>
        <header className={styles.CLASSNAMES.header}>
          {sidebarsContext.sidebar.title && (
            <Typography
              type={TYPOGRAPHY_TYPE.TITLE_2}
              size={TYPOGRAPHY_SIZE.XL}
              className={styles.CLASSNAMES.title}
              shouldTruncate
            >
              {sidebarsContext.sidebar.title}
            </Typography>
          )}
          <IconButton
            type={ICON_BUTTON_TYPE.PRIMARY}
            size={ICON_BUTTON_SIZE.MD}
            Icon={IconClose}
            onClick={() => {
              sidebarsContext.sidebar.setIsOpen(false);
              sidebarsContext.navbar.setIsOpen(true);
            }}
          />
        </header>
        <main>{sidebarsContext.sidebar.element}</main>
      </elements.Bar>
    </elements.Container>
  );
};
