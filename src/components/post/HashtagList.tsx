import Link from "next/link";
import { IPostIndex } from "../../types/query.type";

const HashtagList = ({ hashtagList }: IPostIndex) => {
  let colorCnt = 0;

  function colorLoop() {
    const colors = [
      "pink-600",
      "cyan-600",
      "sky-600",
      "fuchsia-600",
      "rose-600",
      "amber-600",
    ];
    const result = () => {
      if (colorCnt === colors.length - 1) {
        colorCnt = 0;
        return `text-${colors[0]} border-${colors[0]}`;
      } else {
        return `text-${colors[colorCnt]} border-${colors[colorCnt]}`;
      }
    };
    colorCnt++;

    return result();
  }

  return (
    <div
      id="hashtagList"
      className="flex max-w-[640px] shrink-0 flex-grow-0 flex-wrap gap-2 sm:min-w-[640px]"
    >
      {hashtagList.map(({ hashtag, count, id }, idx) => (
        <Link key={idx} href={`/hashtag/${id}`}>
          <button
            className={`rounded-full border bg-white px-4 py-2 text-sm ${colorLoop()}`}
          >
            {`#${hashtag} (${count})`}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default HashtagList;
