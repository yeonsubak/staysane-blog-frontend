export default function colorLoop(state: string, idx: number, lastIdx: number) {
  const expr = state;
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

  const result = () => {
    switch (expr) {
      case "active":
        return `text-white border-${colors[iterator]} bg-${colors[iterator]}`;

      case "inactive":
        return `text-${colors[iterator]} border-${colors[iterator]} bg-white`;
    }
  };

  return result();
}
