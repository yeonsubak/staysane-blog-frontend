export interface IColorLoop {
  idx: number;
  lastIdx: number;
  keywords: string[];
}

export default function colorLoop({ idx, lastIdx, keywords }: IColorLoop) {
  const result: string[] = [];
  const iterator =
    idx > lastIdx ? idx - Math.floor(idx / lastIdx) * lastIdx : idx;
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
