import type { IconButtonHandlers } from './useIconButtonHandlers.types.ts';

export const useIconButtonHandlers = (): IconButtonHandlers => {
  const handleMouseDown: IconButtonHandlers['handleMouseDown'] = (e) => {
    e.preventDefault();
  };

  return {
    handleMouseDown,
  };
};
