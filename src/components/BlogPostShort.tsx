import Image from "next/image";
import React from "react";
import BookIcon from "../resources/icons/BookIcon";
import CommentIcon from "../resources/icons/CommentIcon";
import DateIcon from "../resources/icons/DateIcon";
import ViewIcon from "../resources/icons/ViewIcon";
import { BlogPosts } from "../types/blogtypes";

const BlogPostShort = ({ attributes }: BlogPosts) => {
  const dateTime = (date: any) => {
    const dt = new Date(date);
    return `${dt.toLocaleDateString("ko-KR")} ${dt.toLocaleTimeString(
      "ko-KR"
    )}`;
  };

  return (
    <div className="mt-2 flex h-[326px] flex-col gap-6 bg-white px-10 py-9 shadow-lg md:min-w-[520px]">
      <div className="flex flex-row">
        <div className={`imageBox h-24 w-24 shrink-0 bg-teal-600`}>
          
        </div>
        <div className="ml-3">
          <h2 className="keep-all  h-20 text-2xl font-semibold">
            {attributes.title}
          </h2>
          <div className="postInfoBox flex flex-row gap-4 text-xs">
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
      <div className="paragraphs text-sm">
        <p className="line-clamp-3">{attributes.article}</p>
      </div>
      <div className="postBoxFooter flex flex-row">
        <div className="hashtagBox flex gap-6 font-semibold">
          {
            attributes.hashtags.map((data, idx) => (
              <button key={idx} className="bg-themeGray px-3 py-2 text-sm shadow-md">
                {`# ${data.hashtag}`}
              </button>
            ))
          }
          
        </div>
        <div className="avatarBox ml-auto flex flex-row items-center gap-2">
          <Image
            src={attributes.author.data.attributes.profileImg.data.attributes.formats.thumbnail.url}
            alt="Profile image of the blog owner."
            width={40}
            height={40}
            className="rounded-full text-xs line-clamp-1"
          />
          <p className="font-semibold">{attributes.author.data.attributes.name}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostShort;
