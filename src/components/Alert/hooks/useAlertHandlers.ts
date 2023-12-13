import type { AlertProps } from '../Alert.types';
import type {AlertHandlers} from "./useAlertHandlers.types";

export const useAlertHandlers = ({ props }: {
  props: Pick<AlertProps, 'onClose'>;
}): AlertHandlers => {
  const handleClose: AlertHandlers['handleClose'] = (): void => {
    props.onClose?.();
  };

  return {
    handleClose
  };
};
