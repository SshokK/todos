import type { FC } from 'react';

import * as components from 'components';
import * as utils from 'utils';

export const AppHelp: FC = () => {
  const sidebars = utils.useSidebars();

  const handleClick = () => {
    sidebars.sidebar.setIsOpen(true);
    sidebars.sidebar.setTitle('App Info');
  };

  return (
    <components.IconButton
      type={components.ICON_BUTTON_TYPE.TERTIARY}
      size={components.ICON_BUTTON_SIZE.LG}
      Icon={components.IconQuestionCircled}
      onClick={handleClick}
    />
  );
};
