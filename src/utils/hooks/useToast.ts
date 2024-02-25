import { useContext } from 'react';
import { ToastContext } from '../../contexts/toast/ToastContext';

export const useToast = () => {
  return useContext(ToastContext);
};
