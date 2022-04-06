import { parseISO } from "date-fns";

export const safeParseISO = (date: string | Date): Date => {
  if (date instanceof Date) {
    return date;
  }

  return date ? parseISO(date) : (null as unknown as Date);
};

export const onlyNumbers = (str: string): string => str.replace(/\D/g, "");

export const realToNumber = (strInReal: string): number =>
  +String(strInReal).replace("R$ ", "").replace(/\./g, "").replace(/\,/g, ".");

export const numberToReal = (num: number): string =>
  String(num.toFixed(2)).replace(/\./g, ",");
