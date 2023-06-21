import * as utils from 'utils';

export const INITIAL_DATE = utils.getYesterday();

export enum ANIMATION_DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ANIMATION_NAME {
  ENTER = 'enter',
  ACTIVE = 'active',
  EXIT = 'exit',
}
