function formatDate(date: Date): string {
  return new Date(date).toISOString().split("T")[0];
}

function truncateTitle(str: string, length: number = 24): string {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
}

export { formatDate, truncateTitle };
