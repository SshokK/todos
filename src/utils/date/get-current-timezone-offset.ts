export const getCurrentTimezoneOffset = (): string => {
  const offset = new Date().getTimezoneOffset();

  const hours = Math.floor(offset / 60);
  const minutes = offset - hours * 60;

  return `${offset < 0 ? '+' : '-'}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};
