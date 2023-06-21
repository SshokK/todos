import { SidebarsContext } from '../SidebarsContext';

import { useContext } from 'react';

export const useSidebarsContext = () => {
  return useContext(SidebarsContext);
};
