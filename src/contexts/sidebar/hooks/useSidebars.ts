import { SidebarsContext } from '../SidebarsContext';

import { useContext } from 'react';

export const useSidebars = () => {
  return useContext(SidebarsContext);
};
