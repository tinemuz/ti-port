function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function truncateTitle(str: string, length: number = 24): string {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
}

export { formatDate, truncateTitle };
