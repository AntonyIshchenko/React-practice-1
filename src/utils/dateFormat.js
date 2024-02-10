import { formatDistanceToNow, format } from 'date-fns';

export function formatToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatToStats(date) {
  return format(new Date(date), "Pp");
}