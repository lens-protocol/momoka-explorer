import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const getRelativeTime = (timeString: string) => {
  return dayjs(new Date(timeString)).fromNow();
};
