export interface IColorLoop {
  idx: number;
  lastIdx: number;
  keywords: string[];
}

/**
 * This function converts userinput keywords into a string of Tailwind CSS utilities w/ predefined color sets.
 * It's effective to use for implementing strict color scheme for rendering an unknown length of an array.
 * @param {number} idx Index of an element in the given array.
 * @param {lastIdx} lastIdx Last index of the array.
 * @param {string[]} keywords Array of color-required Tailwind CSS utilities (e.g. text, border, bg)
 * @returns {string} String of Tailwind CSS utilities (e.g. "text-pink-500 border-pink-500")
 */
export default function colorLoop({ idx, lastIdx, keywords }: IColorLoop) {
  const result: string[] = [];
  const iterator =
    idx > lastIdx ? idx % lastIdx : idx;
  const colors = [
    "pink-500",
    "cyan-500",
    "sky-500",
    "fuchsia-500",
    "rose-500",
    "amber-500",
  ];

  for (const keyword of keywords) {
    result.push(`${keyword}-${colors[iterator]}`);
  }

  return result.join(" ");
}
