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
  const coverImg = props.coverImg;
  const parsedArticle = parse(article);

  // console.log(attributes.coverImg.data.attributes.formats.thumbnail.url)

  const css = {
    preview: {
      postBox:
        "mt-2 flex flex-col max-w-[768px] gap-6 bg-white px-6 pt-4 sm:py-9 shadow-lg sm:min-w-[520px]",
      imageBox: "w-full",
      postHeaderBox: "flex flex-col items-center",
      postHeader:
        "keep-all py-4 text-[1.4rem] font-semibold text-center sm:text-[1.8rem] sm:leading-10",
      postInfoBox:
        "flex flex-col items-center sm:flex sm:flex-row sm:gap-4 text-xs",
    },
    full: {
      postBox:
        "mt-2 px-6 py-9 flex flex-col gap-6 max-w-[768px] bg-white shadow-lg sm:min-w-[520px] sm:px-10",
      imageBox: "w-full",
      postHeaderBox: "flex flex-col items-center",
      postHeader:
        "keep-all py-4 text-[1.4rem] font-semibold text-center sm:text-[1.8rem] sm:leading-10",
      postInfoBox:
        "flex flex-col items-center sm:flex sm:flex-row sm:gap-4 text-xs",
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
      <div
        className={isFull ? css.full.postHeaderBox : css.preview.postHeaderBox}
      >
        <div className={isFull ? css.full.imageBox : css.preview.imageBox}>
          {isFull ? (
            <Image
              src={attributes.coverImg.data?.attributes.formats.medium.url}
              width={attributes.coverImg.data?.attributes.formats.medium.width}
              height={
                attributes.coverImg.data?.attributes.formats.medium.height
              }
              className="object-cover object-center"
              alt={""}
            />
          ) : (
            <Image
              src={attributes.coverImg.data?.attributes.formats.small.url}
              width={attributes.coverImg.data?.attributes.formats.small.width}
              height={attributes.coverImg.data?.attributes.formats.small.height}
              className="object-fill"
              alt={""}
            />
          )}
        </div>
        <div className="ml-2 sm:ml-4">
          <Link href={`/post/${id.toString()}`}>
            <a>
              <h2
                className={
                  isFull ? css.full.postHeader : css.preview.postHeader
                }
              >
                {attributes.title}
              </h2>
            </a>
          </Link>
          <div
            className={isFull ? css.full.postInfoBox : css.preview.postInfoBox}
          >
            <div className="flex flex-row items-center gap-1">
              <>
                <DateIcon />
                {dateTime(attributes.publishedAt)}
              </>
            </div>
            <div className="flex flex-row items-center gap-3">
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
      </div>
      {isFull ? (
        <div className="px-2 sm:px-4">
          <div className="keep-all -m-3 leading-loose sm:m-0">
            {parsedArticle}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="postBoxFooter flex flex-row flex-wrap">
        <div className="hashtagBox m-auto flex gap-6 font-semibold sm:m-0">
          {attributes.hashtags.data.map((data, idx) => (
            <button
              key={idx}
              className="shrink bg-gray-50 px-3 py-2 text-xs shadow-md sm:text-sm"
            >
              {`# ${data.attributes.hashtag}`}
            </button>
          ))}
        </div>
        <div className="avatarBox m-auto flex flex-row items-center gap-2 py-4 text-sm sm:m-0 sm:ml-auto sm:py-0 sm:text-base">
          <Image
            src={
              attributes.author.data.attributes.profileImg.data.attributes
                .formats.thumbnail.url
            }
            alt="Profile image of the blog owner."
            width={40}
            height={40}
            className="rounded-full sm:h-full sm:w-full"
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
