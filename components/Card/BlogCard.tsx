import { BlogPostType } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { RichTextCoomponent } from "../RichTextComponent";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

interface Props {
  data: BlogPostType;
}
const BlogCard = ({ data }: Props) => {
  const { body, mainImage, slug, title, publishedAt, author } = data;

  return (
    <Link href={`/blogs/${slug.current}`} className="relative w-[320px] h-[420px] flex flex-col rounded-[7px] shadow-lg hover:shadow-xl border border-slate-400 hover:border-slate-400 hover:shadow-primaryBlue/25 overflow-hidden">
      {mainImage && (
        <div className="relative w-full h-full">
          <Image
            src={urlForImage(mainImage).url()}
            alt="mainImage"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="radial-gradient1 absolute top-0 left-0 w-full h-full p-[10px] flex flex-col items-center justify-center gap-[5px] border-t border-slate-400 ">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-[14px] text-slate-500 ">{`${publishedAt}`}</p>
        <PortableText value={body} components={RichTextCoomponent} />
      </div>
    </Link>
  );
};

export default BlogCard;
