/**
 * It's a simple padStart() function converts single-digit number with double-digit number w/ "0"
 * @param {string} datetime
 * @returns {string} String of a number between 0 to 9 with "0" at the tenth digit.
 */
export function addZero(datetime: string) {
  return datetime.padStart(2, "0");
}

export function stringifyDateTime(date: string) {
  const dt = new Date(date);
  return `${dt.getFullYear()}-${addZero(
    (dt.getMonth() + 1).toString()
  )}-${addZero(dt.getDate().toString())} ${addZero(
    dt.getHours().toString()
  )}:${addZero(dt.getMinutes().toString())}`;
}
