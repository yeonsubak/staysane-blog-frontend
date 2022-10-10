import axios from "axios";
import React from "react";

const BlogPostNav = () => {

  return (
    <div className="mt-6 max-w-[768px] bg-white px-10 py-6 shadow-lg sm:min-w-[640px]">
      <div className="grid grid-cols-2 text-center">
        <div>
          <span className="text-teal-600 font-semibold">이전 글</span>
          
        </div>
        <div>
          <span className="text-teal-600 font-semibold">다음 글</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostNav;
