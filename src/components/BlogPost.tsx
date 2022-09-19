import Image from "next/image";
import React from "react";
import BookIcon from "../resources/Icons/BookIcon";
import CommentIcon from "../resources/Icons/CommentIcon";
import DateIcon from "../resources/Icons/DateIcon";
import ViewIcon from "../resources/Icons/ViewIcon";

const BlogPost = () => {
  return (
    <div className="mt-2 flex h-[326px] flex-col gap-6 bg-white px-16 py-9 shadow-lg">
      <div className="flex flex-row">
        <div className="imageBox h-24 w-24 shrink-0 bg-teal-800"></div>
        <div className="ml-3">
          <h2 className="h-20 break-words text-2xl font-semibold">
            젠킨스로 CI/CD 파이프라인 구축하기 (3)
          </h2>
          <div className="postInfoBox flex flex-row gap-4 text-xs">
            <div className="felx-row flex items-center gap-1">
              <DateIcon />
              2022년 9월 19일
            </div>
            <div className="felx-row flex items-center gap-1">
              <BookIcon />
              2분 분량
            </div>
            <div className="felx-row flex items-center gap-1">
              <CommentIcon />2
            </div>
            <div className="felx-row flex items-center gap-1">
              <ViewIcon />
              365
            </div>
          </div>
        </div>
      </div>
      <div className="paragraphs text-sm">
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi,
          feugiat at sociis auctor lectus ultrices odio. At vel imperdiet congue
          nibh est suspendisse. Pellentesque ut ornare non maecenas. Sapien
          egestas sem viverra risus sed interdum. Velit rhoncus quam massa eu
          cras pellentesque. Quam nunc, duis cursus vel.
        </p>
      </div>
      <div className="postBoxFooter flex flex-row">
        <div className="hashtagBox flex gap-6 font-semibold">
          <button className="bg-themeGray px-3 py-2 text-sm shadow-md">
            # Jenkins
          </button>
          <button className="bg-themeGray px-3 py-2 text-sm shadow-md">
            # CI/CD
          </button>
          <button className="bg-themeGray px-3 py-2 text-sm shadow-md">
            # AWS
          </button>
        </div>
        <div className="avatarBox ml-auto flex flex-row items-center gap-2">
          <Image
            src="/img/ProfileImage.jpg"
            alt="Profile image of the blog owner."
            width={40}
            height={40}
            className="rounded-full text-xs line-clamp-1"
          />
          <p className="font-semibold">Yeonsu Bak</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
