import { SidebarsContext } from '../../contexts/sidebar/SidebarsContext';

import { useContext } from 'react';

export const useSidebars = () => {
  return useContext(SidebarsContext);
};
