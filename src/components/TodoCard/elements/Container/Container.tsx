import type { ContainerProps } from './Container.types.ts';

import * as react from 'react';
import * as animations from './Container.animations.ts';
import * as styles from './Container.styles.ts';

import { Card } from '../../../Card';

export const Container = react.forwardRef<HTMLDivElement, ContainerProps>(
  ({ animationType, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        layout
        custom={animationType}
        initial={animations.ANIMATION_NAME.ENTER}
        animate={animations.ANIMATION_NAME.ACTIVE}
        exit={animations.ANIMATION_NAME.EXIT}
        variants={animations.VARIANTS}
        className={styles.CLASSNAMES.todoCard}
        {...props}
      >
        {props.children}
      </Card>
    );
  },
);
