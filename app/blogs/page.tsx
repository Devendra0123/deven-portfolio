import React from "react";
import { fetchBlog } from "../actions";
import { BlogPostType } from "@/types";
import BlogCard from "@/components/Card/BlogCard";

const Blogs = async () => {
  const data = await fetchBlog();
  return (
    <div className="w-full flex flex-col items-center font-poppins">
      <div className="max-w-[50%] flex flex-col items-center gap-[20px] text-center mt-[30px]">
        <h1 className="text-2xl font-bold tracking-[1.3px] font-lato">
          Beyond the Screen: The World <br /> of Programming
        </h1>
        <p>
          Embark on a journey through the fascinating world of programming.
          Discover new languages, frameworks, and best practices to level up
          your coding game.
        </p>
      </div>

      <div className="w-full mt-[60px] flex items-center justify-center gap-[40px] flex-wrap">
        {data?.length > 0 &&
          data.map((item, index) => <BlogCard key={index} data={item} />)}
      </div>
    </div>
  );
};

export default Blogs;
