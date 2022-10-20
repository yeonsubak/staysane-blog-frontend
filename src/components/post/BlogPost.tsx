import { useEffect, useState } from "react";
import axios from "axios";
import { IPropsBlogPost } from "../../types/blog.type";
import { ISinglePost } from "../../types/query.type";

import parse from "html-react-parser";
import Link from "next/link";

import Image from "next/future/image";
import { addZero } from "../../functions/utilityFunctions";
import { dynamicCSS } from "./BlogPost.dynamicCSS";
import { BookIcon, DateIcon, ViewIcon } from "../etc/IconComponents";

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

  const [date, setDate] = useState<string>("");
  const [view, setView] = useState<number>(0);

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
      .get<ISinglePost>(
        `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/api/posts/${id}`
      )
      .then(({ data }) => {
        setView(data.data.attributes.view);
      });
  }, [attributes.publishedAt, id]);

  return (
    <div
      className={isFull ? dynamicCSS.full.postBox : dynamicCSS.preview.postBox}
    >
      <div
        className={
          isFull
            ? dynamicCSS.full.postHeaderBox
            : dynamicCSS.preview.postHeaderBox
        }
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
              className={
                isFull ? dynamicCSS.full.coverImg : dynamicCSS.preview.coverImg
              }
              alt={coverImg.attributes.alternativeText}
            />
          ) : (
            <Image
              src={coverImg.attributes.formats.small.url}
              width={coverImg.attributes.formats.small.width}
              height={coverImg.attributes.formats.small.height}
              className={
                isFull ? dynamicCSS.full.coverImg : dynamicCSS.preview.coverImg
              }
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
