import Image from "next/image";
import BookIcon from "../resources/icons/BookIcon";
import CommentIcon from "../resources/icons/CommentIcon";
import DateIcon from "../resources/icons/DateIcon";
import ViewIcon from "../resources/icons/ViewIcon";
import { IPropsBlogPost } from "../types/blogtypes";
import parse from "html-react-parser";
import Link from "next/link";

const BlogPost = (props: IPropsBlogPost) => {
  const id = props.id;
  const attributes = props.attributes;
  const isFull = props.isFull;
  const article = props.article;
  const parsedArticle = parse(article);

  const css = {
    preview: {
      postBox:
        "mt-2 h-[384px] max-w-[768px] flex flex-col gap-6 bg-white px-10 py-9 shadow-lg md:min-w-[520px]",
      postBody: "line-clamp-4 keep-all leading-loose",
    },
    full: {
      postBox:
        "mt-2 max-w-[768px] flex flex-col gap-6 bg-white px-10 py-9 shadow-lg md:min-w-[520px]",
      postBody: "keep-all leading-loose",
    },
  };

  const dateTime = (date: string) => {
    const dt = new Date(date);
    return `${dt.toLocaleDateString("ko-KR")} ${dt.toLocaleTimeString(
      "ko-KR"
    )}`;
  };

  return (
    <div className={isFull ? css.full.postBox : css.preview.postBox}>
      <div className="flex flex-row">
        <div className="imageBox h-24 w-24 shrink-0 bg-teal-600"></div>
        <div className="ml-4">
          <Link href={`/post/${id.toString()}`}>
            <a>
              <h2 className="keep-all -mt-1 h-20 text-[1.8rem] font-semibold leading-10">
                {attributes.title}
              </h2>
            </a>
          </Link>
          <div className="postInfoBox flex flex-row gap-4 pt-[0.375rem] text-xs">
            <div className="flex flex-row items-center gap-1">
              <>
                <DateIcon />
                {dateTime(attributes.publishedAt)}
              </>
            </div>
            <div className="flex flex-row items-center gap-1">
              <BookIcon />
              2분 분량
            </div>
            <div className="flex flex-row items-center gap-1">
              <CommentIcon />2
            </div>
            <div className="flex flex-row items-center gap-1">
              <ViewIcon />
              365
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className={isFull ? css.full.postBody : css.preview.postBody}>
          {parsedArticle}
        </div>
      </div>
      <div className="postBoxFooter flex flex-row">
        <div className="hashtagBox flex gap-6 font-semibold">
          {attributes.hashtags.data.map((data, idx) => (
            <button
              key={idx}
              className="bg-gray-50 px-3 py-2 text-sm shadow-md"
            >
              {`# ${data.attributes.hashtag}`}
            </button>
          ))}
        </div>
        <div className="avatarBox ml-auto flex flex-row items-center gap-2">
          <Image
            src={
              attributes.author.data.attributes.profileImg.data.attributes
                .formats.thumbnail.url
            }
            alt="Profile image of the blog owner."
            width={40}
            height={40}
            className="rounded-full text-xs line-clamp-1"
          />
          <p className="font-semibold">
            {attributes.author.data.attributes.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
