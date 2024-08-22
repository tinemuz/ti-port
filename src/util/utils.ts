function formatDate(date: Date): string {
  return new Date(date).toISOString().split("T")[0];
}

const formatTime = (date: Date, timeZone: string) => {
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
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

export { formatDate, formatTime, getTimeZoneAbbreviation };
