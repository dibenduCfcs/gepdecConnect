import { isToday, format } from "date-fns";

export const useUtilty = () => {
  const formatDateTime = (date: Date | string, customFormat?: string) => {
    const parsedDate = typeof date === "string" ? new Date(date) : date;
    if (customFormat) {
      return format(parsedDate, customFormat);
    }
    if (isToday(parsedDate)) {
      return `Today, ${format(parsedDate, "hh:mm a")}`;
    }

    return format(parsedDate, "MMM dd, yyyy, hh:mm a");
  };
  return { formatDateTime };
};
