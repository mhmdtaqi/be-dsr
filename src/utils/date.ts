export const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const isSameDay = (a: Date, b: Date) => startOfDay(a).getTime() === startOfDay(b).getTime();

export const isSunday = (d: Date) => startOfDay(d).getDay() === 0;

export const dayDiff = (future: Date, base: Date) => {
  const f = startOfDay(future).getTime();
  const b = startOfDay(base).getTime();
  return Math.round((f - b) / (1000 * 60 * 60 * 24));
};

// count working days (Mon-Sat) inclusive
export const workingDaysBetween = (start: Date, end: Date) => {
  let cnt = 0;
  const d = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  while (d <= end) {
    if (d.getDay() !== 0) cnt++;
    d.setDate(d.getDate() + 1);
  }
  return cnt;
};
