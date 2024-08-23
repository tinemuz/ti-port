function formatDate(date: Date): string {
  return new Date(date).toISOString().split("T")[0];
}

const formatTime = (date: Date) => {
  return date
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    .replace(/^24:/, "00:");
};


function truncateTitle(str: string, length: number = 13): string {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
}

export { formatDate, formatTime, truncateTitle };
