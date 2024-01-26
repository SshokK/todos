import type { ToastContextProviderData } from './useToastContextProviderData.types.ts';

import { TOAST_TYPE } from '../../../../components/Toast/Toast.constants.ts';

export const INITIAL_PROPS: ToastContextProviderData['localState']['props'] = {
  title: null,
  description: null,
  type: TOAST_TYPE.NEUTRAL,
};
