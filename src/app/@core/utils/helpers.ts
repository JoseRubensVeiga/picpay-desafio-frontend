import { parseISO } from "date-fns";

export const safeParseISO = (date: string | Date): Date => {
  if (date instanceof Date) {
    return date;
  }

  return date ? parseISO(date) : (null as unknown as Date);
};
