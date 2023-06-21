import type * as constants from './Status.constants';

export type StatusProps = {
  type: constants.STATUS_TYPES;
  isPinging?: boolean;
};
