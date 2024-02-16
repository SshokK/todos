import type * as framerMotion from 'framer-motion';

import * as constants from './TodoCard.constants.ts';

export enum ANIMATION_NAME {
  ENTER = 'enter',
  ACTIVE = 'active',
  EXIT = 'exit',
}

export const VARIANTS: framerMotion.Variants = {
  [ANIMATION_NAME.ENTER]: (animationType: constants.ANIMATION_TYPE) => {
    switch (animationType) {
      case constants.ANIMATION_TYPE.SLIDE_UP: {
        return {
          opacity: 0,
          y: 50,
          transition: {
            duration: 0.2,
          },
        };
      }

      default:
      case constants.ANIMATION_TYPE.FADE_IN: {
        return {
          opacity: 0,
        };
      }
    }
  },
  [ANIMATION_NAME.ACTIVE]: (animationType: constants.ANIMATION_TYPE) => {
    switch (animationType) {
      case constants.ANIMATION_TYPE.SLIDE_UP: {
        return {
          opacity: 1,
          y: [50, 10, 0],
          transition: {
            duration: 0.4,
          },
        };
      }

      default:
      case constants.ANIMATION_TYPE.FADE_IN: {
        return {
          opacity: 1,
        };
      }
    }
  },
  [ANIMATION_NAME.EXIT]: (animationType: constants.ANIMATION_TYPE) => {
    switch (animationType) {
      case constants.ANIMATION_TYPE.SLIDE_UP: {
        return {
          opacity: 0,
          transition: {
            duration: 0.15,
          },
        };
      }

      default:
      case constants.ANIMATION_TYPE.FADE_IN: {
        return {
          opacity: 0,
        };
      }
    }
  },
};
