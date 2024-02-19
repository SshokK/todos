import type { ComponentProps } from 'react';
import type { Card } from '../../../Card';

import type * as constants from './Container.constants.ts';

export type ContainerProps = ComponentProps<typeof Card> & {
  animationType?: constants.ANIMATION_TYPE;
};
