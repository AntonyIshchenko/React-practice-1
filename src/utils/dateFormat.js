import { formatDistanceToNow } from 'date-fns';

export function formatToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
