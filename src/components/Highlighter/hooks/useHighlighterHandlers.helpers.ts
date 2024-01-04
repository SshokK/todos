export const getElementDimensions = (element: HTMLElement | null) => {
  return {
    width: element?.getBoundingClientRect?.()?.width ?? 0,
    height: element?.getBoundingClientRect?.()?.height ?? 0,
    left: element?.getBoundingClientRect?.()?.left ?? 0,
    top: element?.getBoundingClientRect?.()?.top ?? 0,
  };
};
