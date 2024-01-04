import * as globalConstants from '../../constants/global.constants.ts';

export const getRootElement = (): HTMLElement => {
  return document.getElementById(
    globalConstants.ROOT_ELEMENT_ID,
  ) as HTMLElement;
};
