import { BlogPostType } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { RichTextCoomponent } from "../RichTextComponent";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { convertDate1 } from "@/lib/dateConvertor";

interface Props {
  data: BlogPostType;
}
const BlogCard = ({ data }: Props) => {
  const { body, mainImage, slug, title, publishedAt, author } = data;

  return (
    <Link
      href={`/blogs/${slug.current}`}
      className="blogCard group relative w-[320px] h-[420px] flex flex-col rounded-[7px] shadow-lg border border-slate-300 hover:border-slate-400 hover:shadow-primaryBlue/25 overflow-hidden transition duration-150 ease-out"
    >
      {mainImage && (
        <div className="relative w-full h-full">
          <Image
            src={urlForImage(mainImage).url()}
            alt="mainImage"
            fill
            className="object-cover group-hover:scale-105 transition duration-150 ease-out"
          />
        </div>
      )}

      <div className="z-[2] absolute top-0 left-0 opacity-100 group-hover:opacity-0 w-full p-[20px] bg-white/75 backdrop-blur-sm">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="opacity-0 group-hover:opacity-100 radial-gradient1 absolute top-0 left-0 w-full h-full p-[10px] flex flex-col items-center justify-center gap-[5px] ">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-[14px] text-slate-500 ">
          {convertDate1(publishedAt)}
        </p>
        <PortableText value={body} components={RichTextCoomponent} />
      </div>
    </Link>
  );
};

export default BlogCard;
