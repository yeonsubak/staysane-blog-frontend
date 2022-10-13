import Image from "next/future/image";
import BookIcon from "../resources/icons/BookIcon";
import DateIcon from "../resources/icons/DateIcon";
import ViewIcon from "../resources/icons/ViewIcon";
import { IPropsBlogPost, ISinglePost } from "../types/blogtypes";
import parse from "html-react-parser";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogPost = (props: IPropsBlogPost) => {
  const id = props.id;
  const attributes = props.attributes;
  const coverImg = attributes.coverImg.data;
  const isFull = props.isFull;
  const article = props.article
    // configuration for custom layout inside lists.
    .replaceAll("(edjs-code-block-open)", '<div class="edjs-code">')
    .replaceAll("(edjs-code-block-end)", "</div>")
    .replaceAll("(edjs-raw-open)", '<div class="edjs-raw">')
    .replaceAll("(edjs-raw-end)", "</div>");
  const parsedArticle = parse(article);

  const css = {
    preview: {
      postBox:
        "mt-2 flex flex-col max-w-[768px] gap-2 sm:gap-6 bg-white px-6 pt-4 sm:py-9 sm:px-10 shadow-lg sm:min-w-[640px]",
      coverImg: "h-16 w-auto object-contain object-center",
      postHeaderBox: "flex flex-col items-center",
    },
    full: {
      postBox:
        "mt-2 px-6 py-9 flex flex-col gap-6 max-w-[768px] bg-white shadow-lg sm:min-w-[520px] sm:px-10",
      coverImg: "h-32 w-auto object-contain object-center",
      postHeaderBox: "flex flex-col items-center",
    },
  };

  const [date, setDate] = useState<string>("");
  const [view, setView] = useState<number>(0);

  function addZero(datetime: string) {
    return datetime.padStart(2, "0");
  }

  useEffect(() => {
    // Convert datetime format
    const dateTime = (date: string) => {
      const dt = new Date(date);

      return `${dt.getFullYear()}-${addZero(
        (dt.getMonth() + 1).toString()
      )}-${addZero(dt.getDate().toString())} ${addZero(
        dt.getHours().toString()
      )}:${addZero(dt.getMinutes().toString())}`;
    };
    setDate(dateTime(attributes.publishedAt));

    axios
      .get<ISinglePost>(`https://strapi.staysane.me/api/posts/${id}`)
      .then(({ data }) => {
        setView(data.data.attributes.view);
      });
  }, [attributes.publishedAt, id]);

  return (
    <div className={isFull ? css.full.postBox : css.preview.postBox}>
      <div
        className={isFull ? css.full.postHeaderBox : css.preview.postHeaderBox}
      >
        <div
          className="flex w-full justify-center"
          style={{ backgroundColor: attributes.coverImgBGColor }}
        >
          {coverImg.attributes.formats === null ? (
            <Image
              src={coverImg.attributes.url}
              width={coverImg.attributes.width}
              height={coverImg.attributes.height}
              className={isFull ? css.full.coverImg : css.preview.coverImg}
              alt={coverImg.attributes.alternativeText}
            />
          ) : (
            <Image
              src={coverImg.attributes.formats.small.url}
              width={coverImg.attributes.formats.small.width}
              height={coverImg.attributes.formats.small.height}
              className={isFull ? css.full.coverImg : css.preview.coverImg}
              alt={coverImg.attributes.alternativeText}
            />
          )}
        </div>
        <div className="ml-2 sm:ml-4">
          <Link href={`/post/${id.toString()}`}>
            <a>
              <h1 className="keep-all py-4 text-center text-[1.4rem] font-semibold sm:text-[1.6rem] sm:leading-10">
                {attributes.title}
              </h1>
            </a>
          </Link>
          <div className="text-center text-xs">
            <div className="mr-2 inline-block">
              <>
                <DateIcon />
                <span className="ml-1 inline-block">{date}</span>
              </>
            </div>
            <div className="mr-2 inline-block">
              <BookIcon />
              <span className="ml-1 inline-block">{`${attributes.readTime}분 분량`}</span>
            </div>
            <div className="mr-2 inline-block">
              <ViewIcon />
              <span className="ml-1 inline-block">{view}</span>
            </div>
          </div>
        </div>
      </div>
      {isFull ? (
        <div className="px-2 sm:px-4">
          <div className="edjscss keep-all -m-3 leading-loose sm:m-0">
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
        <div className="avatarBox m-auto flex flex-row items-center gap-2 py-4 pl-4 text-sm sm:m-0 sm:ml-auto sm:py-0 sm:text-base">
          <Image
            src={
              attributes.author.data.attributes.profileImg.data.attributes
                .formats.thumbnail.url
            }
            alt="Profile image of the blog owner."
            width={40}
            height={40}
            className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
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
