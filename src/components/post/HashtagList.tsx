import Link from "next/link";
import { useRouter } from "next/router";
import { IPostIndex } from "../../types/query.type";

const HashtagList = ({ hashtagList }: IPostIndex) => {
  const { asPath } = useRouter();
  let colorCnt = 0;

  function colorLoop(state: string) {
    const expr = state;

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
          if (colorCnt === colors.length - 1) {
            colorCnt = 0;
            return `text-white border-${colors[0]} bg-${colors[0]}`;
          } else {
            return `text-white border-${colors[colorCnt]} bg-${colors[colorCnt]}`;
          }

        case "inactive":
          if (colorCnt === colors.length - 1) {
            colorCnt = 0;
            return `text-${colors[0]} border-${colors[0]} bg-white`;
          } else {
            return `text-${colors[colorCnt]} border-${colors[colorCnt]} bg-white`;
          }
      }
    };
    colorCnt++;

    return result();
  }

  return (
    <div
      id="hashtagList"
      className="flex max-w-[640px] shrink-0 flex-grow-0 flex-wrap gap-2 text-xs sm:text-sm sm:min-w-[640px]"
    >
      {hashtagList.map(({ hashtag, count, id }, idx) =>
        asPath === `/hashtag/${id}` ? (
          <Link key={idx} href={`/hashtag/${id}`}>
            <button
              id={`${hashtag.toLowerCase()}`}
              className={`rounded-full border px-4 py-2 ${colorLoop(
                "active"
              )}`}
            >
              {`#${hashtag} (${count})`}
            </button>
          </Link>
        ) : (
          <Link key={idx} href={`/hashtag/${id}`}>
            <button
              id={`${hashtag.toLowerCase()}`}
              className={`rounded-full border bg-white px-4 py-2 ${colorLoop(
                "inactive"
              )}`}
            >
              {`#${hashtag} (${count})`}
            </button>
          </Link>
        )
      )}
    </div>
  );
};

export default HashtagList;
