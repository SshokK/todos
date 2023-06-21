export const addDays = ({
  date,
  daysCount,
}: {
  date: Date;
  daysCount: number;
}): Date => {
  const d = new Date();

  d.setDate(date.getDate() + daysCount);

  return d;
};
