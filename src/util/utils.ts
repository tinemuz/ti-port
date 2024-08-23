function formatDate(date: Date): string {
  return new Date(date).toISOString().split("T")[0];
}

const formatTime = (date: Date, timeZone: string) => {
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  });
};

const getTimeZoneAbbreviation = (date: Date, timeZone: string) => {
  return (
    new Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
      .formatToParts(date)
      .find((part) => part.type === "timeZoneName")?.value || ""
  );
};

function truncateTitle(str: string, length: number = 13): string {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
}

export { formatDate, formatTime, getTimeZoneAbbreviation, truncateTitle };
