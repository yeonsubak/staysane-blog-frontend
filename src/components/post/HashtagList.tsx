import Link from "next/link";
import { useRouter } from "next/router";
import colorLoop from "../../functions/colorLoop";
import { IPostIndex } from "../../types/query.type";

const HashtagList = ({ hashtagList }: IPostIndex) => {
  const { asPath } = useRouter();

  return (
    <div
      id="hashtagList"
      className="flex max-w-[640px] shrink-0 flex-grow-0 flex-wrap gap-2 text-xs sm:min-w-[640px] sm:text-sm"
    >
      {hashtagList.map(({ hashtag, count, id, lastIdx }, idx) =>
        asPath === `/hashtag/${id}` ? (
          <Link key={idx} href={`/hashtag/${id}`}>
            <button
              id={`${hashtag.toLowerCase()}`}
              className={`rounded-full border px-4 py-2 text-white ${colorLoop({
                idx: idx,
                lastIdx: lastIdx,
                keywords: ["border", "bg"],
              })}`}
            >
              {`#${hashtag} (${count})`}
            </button>
          </Link>
        ) : (
          <Link key={idx} href={`/hashtag/${id}`}>
            <button
              id={`${hashtag.toLowerCase()}`}
              className={`rounded-full border bg-white px-4 py-2 ${colorLoop({
                idx: idx,
                lastIdx: lastIdx,
                keywords: ["text", "border"],
              })}`}
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
