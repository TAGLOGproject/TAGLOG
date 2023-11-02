import dayjs from 'dayjs';

export function formatTime(time: Date | string, format = 'MMM DD. YYYY') {
  return dayjs(time).format(format);
}
