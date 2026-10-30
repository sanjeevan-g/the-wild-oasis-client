export function setLocalHoursToUTCOffset(date) {
  if (!date) return date;

  const copy = new Date(date);
  const offset = copy.getTimezoneOffset();
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;

  copy.setHours(hours, minutes, 0, 0);
  return copy;
}
