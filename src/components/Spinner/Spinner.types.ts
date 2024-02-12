import * as constants from './Spinner.constants.ts';

export type SpinnerProps = {
  isVisible?: boolean;
  size?: constants.SPINNER_SIZE;
  width?: constants.SPINNER_WIDTH;
  className?: string;
};
