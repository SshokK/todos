export enum SPINNER_WIDTH {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export const STROKE_WIDTH: Record<SPINNER_WIDTH, number> = {
  [SPINNER_WIDTH.SM]: 8,
  [SPINNER_WIDTH.MD]: 15,
  [SPINNER_WIDTH.LG]: 25,
};
