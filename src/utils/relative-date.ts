import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const toIso = (datestring: string) => {
  const date = new Date(datestring);
  return date.toISOString().split("T")[0];
};

export const relative = (datestring: string) => {
  const date = new Date(datestring);
  return formatDistanceToNow(date, { addSuffix: true });
};
